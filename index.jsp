<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="true" %>
    <%@ page import="java.sql.*, java.util.*, com.petplant.utils.DBConnection" %>
        <% Integer currentUserId=(Integer) session.getAttribute("user_id"); String currentUsername=(String)
            session.getAttribute("username"); if (currentUserId==null) { response.sendRedirect("auth.jsp"); return; }
            String activeParam=request.getParameter("activePlantId"); int activePlantId=-1; if (activeParam !=null) {
            try { activePlantId=Integer.parseInt(activeParam); } catch (NumberFormatException e) { activePlantId=-1; } }
            StringBuilder plantsJson=new StringBuilder("["); int totalCount=0; List<String> speciesCatalog = new
            ArrayList<>();

                try (Connection conn = DBConnection.getConnection()) {
                try (Statement spStmt = conn.createStatement();
                ResultSet spRs = spStmt.executeQuery("SELECT species_name FROM plant_species ORDER BY species_id ASC"))
                {
                while (spRs.next()) {
                speciesCatalog.add(spRs.getString("species_name"));
                }
                } catch (Exception ex) {
                speciesCatalog.add("Money Plant");
                speciesCatalog.add("Jasmine");
                speciesCatalog.add("Monstera");
                speciesCatalog.add("Bonsai");
                }

                String sql = "SELECT plant_id, nickname, species_name, NVL(health_points, 20) AS health_points,
                NVL(growth_stage, 1) AS growth_stage FROM user_plants WHERE user_id = ? ORDER BY plant_id ASC";
                PreparedStatement ps = conn.prepareStatement(sql);
                ps.setInt(1, currentUserId);
                ResultSet rs = ps.executeQuery();

                boolean first = true;
                while (rs.next()) {
                totalCount++;
                int pid = rs.getInt("plant_id");

                if (activePlantId == -1) {
                activePlantId = pid;
                }

                String nick = rs.getString("nickname") != null ? rs.getString("nickname").replace("\"", "\\\"") :
                "Plant";
                String spec = rs.getString("species_name") != null ? rs.getString("species_name").replace("\"", "\\\"")
                : "Money Plant";
                int hp = rs.getInt("health_points");
                int stg = rs.getInt("growth_stage");

                if (!first) plantsJson.append(",");
                plantsJson.append("{\"id\":").append(pid)
                .append(",\"name\":\"").append(nick).append("\"")
                .append(",\"species\":\"").append(spec).append("\"")
                .append(",\"health\":").append(hp)
                .append(",\"stage\":").append(stg).append("}");
                first = false;
                }
                } catch(Exception e) {
                e.printStackTrace();
                }
                plantsJson.append("]");
                %>

                <!DOCTYPE html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Water Me - A Pet Plant - Habitat</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Quicksand:wght@600;700&display=swap"
                        rel="stylesheet">
                    <script src="https://cdn.tailwindcss.com"></script>
                    <link rel="stylesheet" href="assets/css/style.css">
                </head>

                <body class="min-h-screen p-4 sm:p-8 flex items-center justify-center bg-[#FAF7F2] text-[#2D3E33]">

                    <main
                        class="clay-card w-full max-w-5xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 relative overflow-hidden">
                        <!-- Top Navigation Bar -->
                        <header class="lg:col-span-12 flex items-center justify-between pb-6 border-b border-[#EFEBE4]">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-2xl bg-[#E8F5EC] flex items-center justify-center text-xl shadow-inner">
                                    🌱</div>
                                <div>
                                    <h1 class="text-xl font-bold font-['Quicksand'] text-[#1F3325]">Water Me - A Pet
                                        Plant</h1>
                                    <p class="text-[11px] text-[#768C7E] font-semibold">Gardener: <span
                                            class="text-[#2F7E4E] font-bold">
                                            <%= currentUsername %>
                                        </span></p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <button onclick="openModal('addModal')"
                                    class="clay-button px-4 py-2.5 bg-[#4E9F6E] hover:bg-[#438C5F] text-white rounded-2xl text-xs font-bold flex items-center gap-1.5 transition shadow-sm">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                            d="M12 4v16m8-8H4" />
                                    </svg>
                                    <span>Add Plant</span>
                                </button>
                                <button onclick="logoutUser()"
                                    class="clay-button px-3.5 py-2.5 bg-[#FFF2F0] hover:bg-[#FEE4E1] text-[#C4554D] rounded-2xl text-xs font-bold transition"
                                    title="Logout">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </button>
                            </div>
                        </header>

                        <!-- Left Column: Plant Nursery List -->
                        <aside class="lg:col-span-4 flex flex-col justify-between space-y-4">
                            <div>
                                <span
                                    class="text-[11px] font-extrabold uppercase tracking-wider text-[#799081] block mb-3">Your
                                    Botanical Sanctuary</span>
                                <div class="space-y-3 max-h-[420px] overflow-y-auto pr-1" id="plantListContainer"></div>
                            </div>
                            <div
                                class="p-4 rounded-2xl bg-[#F4F1EA]/70 border border-[#E9E4DC] flex items-center justify-between text-xs font-semibold text-[#5B7363]">
                                <span>Total Cultivated</span>
                                <span class="px-2.5 py-0.5 rounded-full bg-white text-[#2F7E4E] shadow-sm font-bold">
                                    <%= totalCount %>
                                </span>
                            </div>
                        </aside>

                        <!-- Right Column: Interactive Terrarium Area -->
                        <section
                            class="lg:col-span-8 flex flex-col justify-between bg-[#FDFCFA] rounded-3xl p-6 sm:p-8 border border-[#EFEAE2]">
                            <div class="flex items-center justify-between">
                                <div>
                                    <span id="activeSpeciesBadge"
                                        class="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#EBF6EE] text-[#2F7E4E]">Species</span>
                                    <div class="flex items-center gap-3 mt-1.5">
                                        <h2 class="text-3xl font-bold font-['Quicksand'] text-[#1F3325]"
                                            id="activePlantName">Plant</h2>
                                        <button onclick="openEditModal()"
                                            class="text-[#849E8D] hover:text-[#2F7E4E] transition" title="Rename Plant">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <button onclick="deletePlant()"
                                    class="p-2.5 text-[#D16D65] hover:bg-[#FEEAE7] rounded-2xl transition"
                                    title="Remove Plant">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>

                            <!-- 3D Terrarium Display Pedestal -->
                            <div class="relative my-6 h-72 sm:h-80 flex items-center justify-center">
                                <div
                                    class="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-b from-[#F3F9F5] via-[#E6F3EA] to-[#DAEDE1] border-4 border-white shadow-[inset_0_4px_16px_rgba(0,0,0,0.04),0_12px_30px_rgba(62,126,82,0.12)] flex items-center justify-center relative overflow-hidden">
                                    <div id="windLayer"
                                        class="absolute inset-0 pointer-events-none flex flex-col justify-around py-12 px-6 opacity-0">
                                        <div
                                            class="h-1 bg-gradient-to-r from-transparent via-[#87D4A8] to-transparent rounded-full w-3/4">
                                        </div>
                                        <div
                                            class="h-1 bg-gradient-to-r from-transparent via-[#BCE6CE] to-transparent rounded-full w-full">
                                        </div>
                                        <div
                                            class="h-1 bg-gradient-to-r from-transparent via-[#87D4A8] to-transparent rounded-full w-2/3 ml-auto">
                                        </div>
                                    </div>
                                    <div id="waterLayer"
                                        class="absolute inset-0 pointer-events-none opacity-0 transition duration-300 flex justify-center items-start pt-6 gap-3">
                                        <div class="w-2.5 h-4 bg-[#76C7EB] rounded-full animate-bounce"></div>
                                        <div
                                            class="w-3 h-5 bg-[#52B7E8] rounded-full animate-bounce [animation-delay:0.15s]">
                                        </div>
                                        <div
                                            class="w-2.5 h-4 bg-[#76C7EB] rounded-full animate-bounce [animation-delay:0.3s]">
                                        </div>
                                    </div>
                                    <div id="plantVisualStage"
                                        class="plant-sway relative z-10 transition-all duration-500"></div>
                                    <div
                                        class="absolute bottom-5 w-40 h-5 bg-gradient-to-r from-[#D98263] via-[#E29A80] to-[#CF7454] rounded-full shadow-md border-2 border-white/60">
                                    </div>
                                </div>
                            </div>

                            <!-- Health Meter -->
                            <div class="space-y-2 mb-6">
                                <div class="flex justify-between items-center text-xs font-bold text-[#556F5D]">
                                    <span>Hydration & Freshness</span>
                                    <span id="healthDisplay" class="text-[#2F7E4E] text-sm">0%</span>
                                </div>
                                <div class="w-full h-3.5 bg-[#EAE5DC] rounded-full p-0.5 overflow-hidden">
                                    <div id="healthBar"
                                        class="h-full rounded-full bg-gradient-to-r from-[#83D19F] to-[#409B66] transition-all duration-500"
                                        style="width: 0%;"></div>
                                </div>
                            </div>

                            <!-- Care Actions -->
                            <div id="careActionsContainer" class="grid grid-cols-2 gap-4">
                                <button onclick="applyCare('water')"
                                    class="clay-button flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl bg-white border border-[#E9F4ED] hover:bg-[#F2FAF5]">
                                    <div
                                        class="w-10 h-10 rounded-2xl bg-[#E6F5FC] text-[#3498DB] flex items-center justify-center text-lg shadow-inner">
                                        💧</div>
                                    <div class="text-left">
                                        <span class="block text-xs font-bold text-[#2D3E33]">Water Plant</span>
                                        <span class="block text-[10px] font-semibold text-[#3498DB]">+15%
                                            Moisture</span>
                                    </div>
                                </button>
                                <button onclick="applyCare('breeze')"
                                    class="clay-button flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl bg-white border border-[#E9F4ED] hover:bg-[#F2FAF5]">
                                    <div
                                        class="w-10 h-10 rounded-2xl bg-[#E8F8F0] text-[#2ECC71] flex items-center justify-center text-lg shadow-inner">
                                        🍃</div>
                                    <div class="text-left">
                                        <span class="block text-xs font-bold text-[#2D3E33]">Gentle Breeze</span>
                                        <span class="block text-[10px] font-semibold text-[#2ECC71]">+10% Air
                                            Flow</span>
                                    </div>
                                </button>
                            </div>
                        </section>
                    </main>

                    <!-- Modals -->
                    <div id="addModal"
                        class="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
                        <div class="clay-card max-w-sm w-full p-6 text-left">
                            <h3 class="text-xl font-bold font-['Quicksand'] text-[#2D3E33] mb-1">Adopt New Flora</h3>
                            <p class="text-xs text-[#768C7E] mb-5">Choose from available catalog species and nickname
                                your plant.</p>
                            <form onsubmit="savePlant(event)">
                                <label class="block text-xs font-bold text-[#556F5D] mb-1">Nickname</label>
                                <input type="text" id="addNickname" required placeholder="e.g., Greenie"
                                    class="w-full bg-[#F4F1EA] rounded-xl px-4 py-2.5 text-sm mb-4 outline-none border border-transparent focus:border-[#4E9F6E]">
                                <label class="block text-xs font-bold text-[#556F5D] mb-1">Select Species (Oracle
                                    Catalog)</label>
                                <select id="addSpecies"
                                    class="w-full bg-[#F4F1EA] rounded-xl px-4 py-2.5 text-sm mb-6 outline-none border border-transparent focus:border-[#4E9F6E]">
                                    <% for (String sp : speciesCatalog) { %>
                                        <option value="<%= sp %>">🌿 <%= sp %>
                                        </option>
                                        <% } %>
                                </select>
                                <div class="flex gap-3">
                                    <button type="button" onclick="closeModal('addModal')"
                                        class="w-1/2 py-2.5 bg-gray-100 rounded-xl text-xs font-bold text-gray-600">Cancel</button>
                                    <button type="submit"
                                        class="w-1/2 py-2.5 bg-[#4E9F6E] text-white rounded-xl text-xs font-bold shadow-md">Adopt</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div id="editModal"
                        class="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
                        <div class="clay-card max-w-sm w-full p-6 text-left">
                            <h3 class="text-xl font-bold font-['Quicksand'] text-[#2D3E33] mb-1">Rename Plant</h3>
                            <form onsubmit="saveName(event)">
                                <input type="text" id="editNickname" required
                                    class="w-full bg-[#F4F1EA] rounded-xl px-4 py-2.5 text-sm my-4 outline-none border border-transparent focus:border-[#4E9F6E]">
                                <div class="flex gap-3">
                                    <button type="button" onclick="closeModal('editModal')"
                                        class="w-1/2 py-2.5 bg-gray-100 rounded-xl text-xs font-bold text-gray-600">Cancel</button>
                                    <button type="submit"
                                        class="w-1/2 py-2.5 bg-[#4E9F6E] text-white rounded-xl text-xs font-bold shadow-md">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- Pass Java variables to JS safely -->
                    <script id="server-data" type="application/json">
        {
            "userPlants": <%= plantsJson.toString() %>,
            "activePlantId": <%= activePlantId %>
        }
    </script>
                    <script>
                        (function () {
                            var serverData = JSON.parse(document.getElementById('server-data').textContent);
                            window.userPlants = serverData.userPlants || [];
                            window.activePlantId = serverData.activePlantId;
                        })();
                    </script>
                    <script src="assets/js/dashboard.js"></script>
                </body>

                </html>