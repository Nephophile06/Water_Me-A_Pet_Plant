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

                String sql = "SELECT plant_id, nickname, species_name, NVL(health_points, 20) AS health_points, " +
                "NVL(growth_stage, 1) AS growth_stage FROM user_plants WHERE user_id = ? ORDER BY plant_id ASC";
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
                    <title>Water Me - A Pet Plant</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Quicksand:wght@600;700;800&display=swap"
                        rel="stylesheet">
                    <script src="https://cdn.tailwindcss.com"></script>
                    <link rel="stylesheet" href="assets/css/style.css">
                    <style>
                        .sky-container {
                            position: fixed;
                            inset: 0;
                            overflow: hidden;
                            pointer-events: none;
                            z-index: 0;
                        }

                        .ambient-leaf {
                            position: absolute;
                            pointer-events: none;
                            opacity: 0;
                        }

                        .puffy-cloud {
                            filter: drop-shadow(0 4px 12px rgba(160, 195, 215, 0.28));
                        }
                    </style>
                </head>

                <body
                    class="nature-sky-bg min-h-screen p-4 sm:p-8 flex items-center justify-center relative select-none overflow-x-hidden">

                    <!-- Ambient Nature Background Sky Layer -->
                    <div class="sky-container">
                        <!-- Glowing Warm Sun Orb -->
                        <div class="sun-glow-orb"></div>

                        <!-- Scattered Puffy Cartoon Clouds -->
                        <!-- Cloud 1 (Top Left) -->
                        <div class="absolute top-[6%] left-[4%] sm:left-[8%] cloud-drift-left-1 puffy-cloud">
                            <svg width="180" height="95" viewBox="0 0 200 110" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M45 100 C20 100 5 82 5 60 C5 40 20 25 40 24 C50 8 72 0 95 0 C120 0 140 10 150 28 C160 22 175 24 185 34 C195 44 195 60 190 72 C198 80 198 92 190 100 Z"
                                    fill="#FFFFFF" />
                            </svg>
                        </div>

                        <!-- Cloud 2 (Top Right) -->
                        <div class="absolute top-[10%] right-[6%] sm:right-[10%] cloud-drift-right-1 puffy-cloud">
                            <svg width="160" height="85" viewBox="0 0 200 110" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M45 100 C20 100 5 82 5 60 C5 40 20 25 40 24 C50 8 72 0 95 0 C120 0 140 10 150 28 C160 22 175 24 185 34 C195 44 195 60 190 72 C198 80 198 92 190 100 Z"
                                    fill="#FFFFFF" />
                            </svg>
                        </div>

                        <!-- Cloud 3 (Mid Left) -->
                        <div
                            class="absolute top-[48%] left-[2%] sm:left-[5%] cloud-drift-left-2 puffy-cloud opacity-95">
                            <svg width="140" height="75" viewBox="0 0 200 110" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M45 100 C20 100 5 82 5 60 C5 40 20 25 40 24 C50 8 72 0 95 0 C120 0 140 10 150 28 C160 22 175 24 185 34 C195 44 195 60 190 72 C198 80 198 92 190 100 Z"
                                    fill="#FFFFFF" />
                            </svg>
                        </div>

                        <!-- Cloud 4 (Mid Right) -->
                        <div
                            class="absolute top-[55%] right-[3%] sm:right-[6%] cloud-drift-right-2 puffy-cloud opacity-90">
                            <svg width="150" height="80" viewBox="0 0 200 110" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M45 100 C20 100 5 82 5 60 C5 40 20 25 40 24 C50 8 72 0 95 0 C120 0 140 10 150 28 C160 22 175 24 185 34 C195 44 195 60 190 72 C198 80 198 92 190 100 Z"
                                    fill="#FFFFFF" />
                            </svg>
                        </div>

                        <!-- Cloud 5 (Bottom Left) -->
                        <div
                            class="absolute bottom-[4%] left-[6%] sm:left-[12%] cloud-drift-bot-1 puffy-cloud opacity-95">
                            <svg width="170" height="90" viewBox="0 0 200 110" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M45 100 C20 100 5 82 5 60 C5 40 20 25 40 24 C50 8 72 0 95 0 C120 0 140 10 150 28 C160 22 175 24 185 34 C195 44 195 60 190 72 C198 80 198 92 190 100 Z"
                                    fill="#FFFFFF" />
                            </svg>
                        </div>

                        <!-- Soaring Stylized Birds -->
                        <div class="absolute bird-soar-1 top-[14%] left-0">
                            <svg width="44" height="26" viewBox="0 0 60 36" fill="none"
                                class="text-[#325842] wing-flap">
                                <path
                                    d="M30 18 C26 12 16 4 2 2 C8 10 18 16 26 22 L24 34 L30 26 L36 34 L34 22 C42 16 52 10 58 2 C44 4 34 12 30 18 Z"
                                    fill="currentColor" />
                                <circle cx="30" cy="15" r="2.2" fill="currentColor" />
                            </svg>
                        </div>

                        <div class="absolute bird-soar-2 top-[30%] left-0">
                            <svg width="34" height="20" viewBox="0 0 60 36" fill="none"
                                class="text-[#48725A] wing-flap">
                                <path
                                    d="M30 18 C26 12 16 4 2 2 C8 10 18 16 26 22 L24 34 L30 26 L36 34 L34 22 C42 16 52 10 58 2 C44 4 34 12 30 18 Z"
                                    fill="currentColor" />
                                <circle cx="30" cy="15" r="2" fill="currentColor" />
                            </svg>
                        </div>

                        <!-- Floating Ambient Leaves -->
                        <div class="ambient-leaf leaf-drift-1 top-4 left-[12%]">
                            <svg width="42" height="42" viewBox="0 0 36 36" fill="none"
                                class="text-[#2EB867] drop-shadow-sm">
                                <path
                                    d="M18 3 C10 8 4 16 4 24 C4 28.5 7.5 32 13 32 C21 32 30 24 32 12 C32 5 25 3 18 3 Z"
                                    fill="currentColor" />
                                <path d="M7 28 C13 22 19 15 28 8" stroke="#FFFFFF" stroke-width="1.8"
                                    stroke-linecap="round" />
                            </svg>
                        </div>

                        <div class="ambient-leaf leaf-drift-2 top-10 right-[15%]">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                                class="text-[#10B981] drop-shadow-sm">
                                <path
                                    d="M18 3 C10 8 4 16 4 24 C4 28.5 7.5 32 13 32 C21 32 30 24 32 12 C32 5 25 3 18 3 Z"
                                    fill="currentColor" />
                                <path d="M7 28 C13 22 19 15 28 8" stroke="#E6F9F0" stroke-width="1.6"
                                    stroke-linecap="round" />
                            </svg>
                        </div>

                        <div class="ambient-leaf leaf-drift-3 top-2 left-[45%]">
                            <svg width="34" height="34" viewBox="0 0 36 36" fill="none"
                                class="text-[#84CC16] drop-shadow-sm">
                                <path
                                    d="M18 3 C10 8 4 16 4 24 C4 28.5 7.5 32 13 32 C21 32 30 24 32 12 C32 5 25 3 18 3 Z"
                                    fill="currentColor" />
                                <path d="M7 28 C13 22 19 15 28 8" stroke="#FFFFFF" stroke-width="1.5"
                                    stroke-linecap="round" />
                            </svg>
                        </div>

                        <!-- Ambient Shimmer / Sparkle Pollen particles -->
                        <div class="ambient-sparkle w-2 h-2 top-[20%] left-[25%]" style="animation-delay: 1s;"></div>
                        <div class="ambient-sparkle w-2.5 h-2.5 top-[35%] right-[22%]" style="animation-delay: 3s;">
                        </div>
                        <div class="ambient-sparkle w-1.5 h-1.5 bottom-[25%] left-[18%]" style="animation-delay: 4.5s;">
                        </div>
                    </div>

                    <!-- Main Dashboard Container -->
                    <main
                        class="clay-card w-full max-w-5xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 relative overflow-hidden z-20 shadow-2xl">
                        <!-- Top Navigation Bar -->
                        <header class="lg:col-span-12 flex items-center justify-between pb-6 border-b border-[#EAEFEA]">
                            <div class="flex items-center gap-3.5">
                                <div
                                    class="w-11 h-11 rounded-2xl bg-gradient-to-b from-[#EBF8F0] to-[#D2EFE0] flex items-center justify-center text-[#2E8B57] shadow-inner border border-white gentle-bounce">
                                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M7 20h10" />
                                        <path d="M10 20c0-4 2-7 2-11" />
                                        <path d="M12 9c2-2 5-3 8-1-1 4-3 7-8 7" fill="#34D399" fill-opacity="0.3" />
                                        <path d="M12 13c-2-2-5-3-8-1 1 4 3 7 8 7" fill="#34D399" fill-opacity="0.3" />
                                    </svg>
                                </div>
                                <div>
                                    <h1
                                        class="text-xl sm:text-2xl font-bold font-['Quicksand'] text-[#163824] tracking-tight">
                                        Water Me</h1>
                                    <div class="flex items-center gap-2 mt-0.5">
                                        <p class="text-[11px] text-[#60806E] font-semibold">Plant Parent: <span
                                                class="text-[#2F7E4E] font-bold">
                                                <%= currentUsername %>
                                            </span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <button onclick="openModal('addModal')"
                                    class="clay-button px-4 py-2.5 bg-[#36925B] hover:bg-[#2B7A4B] text-white rounded-2xl text-xs font-bold flex items-center gap-1.5 transition shadow-sm">
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
                                <div class="flex items-center justify-between mb-3">
                                    <span
                                        class="text-[11px] font-extrabold uppercase tracking-wider text-[#638472] block">Your
                                        Corner</span>
                                </div>
                                <div class="space-y-2.5 max-h-[420px] overflow-y-auto p-1.5 pr-2"
                                    id="plantListContainer">
                                </div>
                            </div>
                            <div
                                class="p-3.5 rounded-2xl bg-[#F0F7F2]/80 border border-[#DCEEE3] flex items-center justify-between text-xs font-semibold text-[#486B57] shadow-xs">
                                <span class="font-bold text-[#3B624B]">Green Family:</span>
                                <span
                                    class="px-3 py-1 rounded-xl bg-white text-[#247E49] shadow-xs font-extrabold border border-[#D4E8DC] text-[11px]">
                                    <%= totalCount %>
                                        <%= totalCount==1 ? "Member" : "Members" %>
                                </span>
                            </div>
                        </aside>

                        <!-- Right Column: Interactive Terrarium Area -->
                        <section
                            class="lg:col-span-8 flex flex-col justify-between bg-gradient-to-b from-[#FFFFFF] to-[#F8FCF9] rounded-3xl p-6 sm:p-8 border border-[#E3EFE7] shadow-inner relative overflow-hidden">
                            <div class="flex items-center justify-between relative z-10">
                                <div>
                                    <span id="activeSpeciesBadge"
                                        class="text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full bg-[#E8F7EE] text-[#247E49] border border-[#D0EFE0]">Species</span>
                                    <div class="flex items-center gap-3 mt-2">
                                        <h2 class="text-3xl font-bold font-['Quicksand'] text-[#163824]"
                                            id="activePlantName">Plant</h2>
                                        <button onclick="openEditModal()"
                                            class="text-[#729A83] hover:text-[#247E49] transition p-1"
                                            title="Rename Plant">
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
                            <div class="relative my-6 h-72 sm:h-80 flex items-center justify-center z-10">
                                <div
                                    class="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-b from-[#F2FBF6] via-[#E4F5EB] to-[#D5EFE0] border-4 border-white shadow-[inset_0_6px_20px_rgba(46,125,79,0.08),0_16px_36px_rgba(54,146,91,0.16)] flex items-center justify-center relative overflow-hidden">
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
                                        class="absolute bottom-5 w-40 h-5 bg-gradient-to-r from-[#D98263] via-[#E29A80] to-[#CF7454] rounded-full shadow-md border-2 border-white/70">
                                    </div>
                                </div>
                            </div>

                            <!-- Health Meter -->
                            <div class="space-y-2 mb-6 z-10">
                                <div class="flex justify-between items-center text-xs font-bold text-[#4B6F57]">
                                    <span class="flex items-center gap-1.5">
                                        <span class="text-sm">💧</span> Hydration & Vitality
                                    </span>
                                    <span id="healthDisplay" class="text-[#247E49] text-sm font-extrabold">0%</span>
                                </div>
                                <div class="w-full h-3.5 bg-[#E2EBE5] rounded-full p-0.5 overflow-hidden shadow-inner">
                                    <div id="healthBar"
                                        class="h-full rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#34D399] to-[#059669] transition-all duration-500 shadow-xs"
                                        style="width: 0%;"></div>
                                </div>
                            </div>

                            <!-- Care Actions -->
                            <div id="careActionsContainer" class="grid grid-cols-2 gap-4 z-10">
                                <button onclick="applyCare('water')"
                                    class="clay-button flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl bg-white border border-[#E3F2E8] hover:bg-[#F2FAF5]">
                                    <div
                                        class="w-10 h-10 rounded-2xl bg-[#E6F5FC] text-[#3498DB] flex items-center justify-center text-lg shadow-inner">
                                        💧</div>
                                    <div class="text-left">
                                        <span class="block text-xs font-bold text-[#163824]">Water Plant</span>
                                        <span class="block text-[10px] font-bold text-[#3498DB]">+15% Moisture</span>
                                    </div>
                                </button>
                                <button onclick="applyCare('breeze')"
                                    class="clay-button flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl bg-white border border-[#E3F2E8] hover:bg-[#F2FAF5]">
                                    <div
                                        class="w-10 h-10 rounded-2xl bg-[#E8F8F0] text-[#2ECC71] flex items-center justify-center text-lg shadow-inner">
                                        🍃</div>
                                    <div class="text-left">
                                        <span class="block text-xs font-bold text-[#163824]">Gentle Breeze</span>
                                        <span class="block text-[10px] font-bold text-[#2ECC71]">+10% Air Flow</span>
                                    </div>
                                </button>
                            </div>
                        </section>
                    </main>

                    <!-- Modals -->
                    <div id="addModal"
                        class="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
                        <div class="clay-card max-w-sm w-full p-6 text-left shadow-2xl">
                            <h3 class="text-xl font-bold font-['Quicksand'] text-[#163824] mb-1">Adopt New Flora</h3>
                            <p class="text-xs text-[#638472] mb-5">Choose from available catalog species and nickname
                                your plant.</p>
                            <form onsubmit="savePlant(event)">
                                <label class="block text-xs font-bold text-[#4B6F57] mb-1.5">Nickname</label>
                                <input type="text" id="addNickname" required placeholder="e.g., Greenie"
                                    class="clay-input w-full rounded-xl px-4 py-2.5 text-sm mb-4 outline-none">
                                <label class="block text-xs font-bold text-[#4B6F57] mb-1.5">Select Species (Oracle
                                    Catalog)</label>
                                <select id="addSpecies"
                                    class="clay-input w-full rounded-xl px-4 py-2.5 text-sm mb-6 outline-none text-[#163824] font-medium">
                                    <% for (String sp : speciesCatalog) { %>
                                        <option value="<%= sp %>">🌿 <%= sp %>
                                        </option>
                                        <% } %>
                                </select>
                                <div class="flex gap-3">
                                    <button type="button" onclick="closeModal('addModal')"
                                        class="w-1/2 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-xs font-bold text-gray-600 transition">Cancel</button>
                                    <button type="submit"
                                        class="w-1/2 py-2.5 bg-[#36925B] hover:bg-[#2B7A4B] text-white rounded-xl text-xs font-bold shadow-md transition">Adopt</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div id="editModal"
                        class="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
                        <div class="clay-card max-w-sm w-full p-6 text-left shadow-2xl">
                            <h3 class="text-xl font-bold font-['Quicksand'] text-[#163824] mb-1">Rename Plant</h3>
                            <p class="text-xs text-[#638472] mb-4">Give your plant companion a new nickname.</p>
                            <form onsubmit="saveName(event)">
                                <input type="text" id="editNickname" required
                                    class="clay-input w-full rounded-xl px-4 py-2.5 text-sm mb-5 outline-none">
                                <div class="flex gap-3">
                                    <button type="button" onclick="closeModal('editModal')"
                                        class="w-1/2 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl text-xs font-bold text-gray-600 transition">Cancel</button>
                                    <button type="submit"
                                        class="w-1/2 py-2.5 bg-[#36925B] hover:bg-[#2B7A4B] text-white rounded-xl text-xs font-bold shadow-md transition">Save</button>
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