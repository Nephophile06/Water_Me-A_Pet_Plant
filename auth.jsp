<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
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
            /* Ambient Nature Scene Setup */
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

            /* Clean Flat Puffy Cloud Style */
            .puffy-cloud {
                filter: drop-shadow(0 4px 10px rgba(160, 195, 215, 0.25));
            }
        </style>
    </head>

    <body class="nature-sky-bg min-h-screen flex items-center justify-center p-4 sm:p-6 relative select-none">

        <!-- Ambient Sky & Nature Elements Layer -->
        <div class="sky-container">

            <!-- Scattered Puffy Cartoon Clouds across the Screen -->
            <!-- Cloud 1 (Top Left) -->
            <div class="absolute top-[8%] left-[6%] sm:left-[9%] cloud-drift-left-1 puffy-cloud">
                <svg width="170" height="90" viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M45 100 C20 100 5 82 5 60 C5 40 20 25 40 24 C50 8 72 0 95 0 C120 0 140 10 150 28 C160 22 175 24 185 34 C195 44 195 60 190 72 C198 80 198 92 190 100 Z"
                        fill="#FFFFFF" />
                </svg>
            </div>

            <!-- Cloud 2 (Top Right) -->
            <div class="absolute top-[12%] right-[8%] sm:right-[12%] cloud-drift-right-1 puffy-cloud">
                <svg width="150" height="80" viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M45 100 C20 100 5 82 5 60 C5 40 20 25 40 24 C50 8 72 0 95 0 C120 0 140 10 150 28 C160 22 175 24 185 34 C195 44 195 60 190 72 C198 80 198 92 190 100 Z"
                        fill="#FFFFFF" />
                </svg>
            </div>

            <!-- Cloud 3 (Mid Left) -->
            <div class="absolute top-[46%] left-[3%] sm:left-[6%] cloud-drift-left-2 puffy-cloud opacity-95">
                <svg width="130" height="70" viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M45 100 C20 100 5 82 5 60 C5 40 20 25 40 24 C50 8 72 0 95 0 C120 0 140 10 150 28 C160 22 175 24 185 34 C195 44 195 60 190 72 C198 80 198 92 190 100 Z"
                        fill="#FFFFFF" />
                </svg>
            </div>

            <!-- Cloud 4 (Mid Right) -->
            <div class="absolute top-[58%] right-[4%] sm:right-[7%] cloud-drift-right-2 puffy-cloud opacity-90">
                <svg width="140" height="75" viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M45 100 C20 100 5 82 5 60 C5 40 20 25 40 24 C50 8 72 0 95 0 C120 0 140 10 150 28 C160 22 175 24 185 34 C195 44 195 60 190 72 C198 80 198 92 190 100 Z"
                        fill="#FFFFFF" />
                </svg>
            </div>

            <!-- Cloud 5 (Bottom Left) -->
            <div class="absolute bottom-[6%] left-[8%] sm:left-[14%] cloud-drift-bot-1 puffy-cloud opacity-95">
                <svg width="160" height="85" viewBox="0 0 200 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M45 100 C20 100 5 82 5 60 C5 40 20 25 40 24 C50 8 72 0 95 0 C120 0 140 10 150 28 C160 22 175 24 185 34 C195 44 195 60 190 72 C198 80 198 92 190 100 Z"
                        fill="#FFFFFF" />
                </svg>
            </div>

            <!-- Redesigned Stylized Flying Birds (Silhouette with Head, Wings & Forked Tail) -->
            <div class="absolute bird-soar-1 top-[16%] left-0">
                <svg width="44" height="26" viewBox="0 0 60 36" fill="none" class="text-[#325842] wing-flap">
                    <!-- Graceful Soaring Bird Silhouette -->
                    <path
                        d="M30 18 C26 12 16 4 2 2 C8 10 18 16 26 22 L24 34 L30 26 L36 34 L34 22 C42 16 52 10 58 2 C44 4 34 12 30 18 Z"
                        fill="currentColor" />
                    <circle cx="30" cy="15" r="2.2" fill="currentColor" />
                </svg>
            </div>

            <div class="absolute bird-soar-2 top-[32%] left-0">
                <svg width="34" height="20" viewBox="0 0 60 36" fill="none" class="text-[#48725A] wing-flap">
                    <path
                        d="M30 18 C26 12 16 4 2 2 C8 10 18 16 26 22 L24 34 L30 26 L36 34 L34 22 C42 16 52 10 58 2 C44 4 34 12 30 18 Z"
                        fill="currentColor" />
                    <circle cx="30" cy="15" r="2" fill="currentColor" />
                </svg>
            </div>

            <!-- Larger & Crisper Floating Leaves in Breeze -->
            <!-- Leaf 1 (Fresh Emerald) -->
            <div class="ambient-leaf leaf-drift-1 top-4 left-[14%]">
                <svg width="42" height="42" viewBox="0 0 36 36" fill="none" class="text-[#2EB867] drop-shadow-sm">
                    <path d="M18 3 C10 8 4 16 4 24 C4 28.5 7.5 32 13 32 C21 32 30 24 32 12 C32 5 25 3 18 3 Z"
                        fill="currentColor" />
                    <path d="M7 28 C13 22 19 15 28 8" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" />
                    <path d="M14 21 C17 19 20 18 22 18" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
                    <path d="M18 16 C21 14 23 13 25 13" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" />
                </svg>
            </div>

            <!-- Leaf 2 (Soft Spring Sage) -->
            <div class="ambient-leaf leaf-drift-2 top-10 right-[18%]">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" class="text-[#10B981] drop-shadow-sm">
                    <path d="M18 3 C10 8 4 16 4 24 C4 28.5 7.5 32 13 32 C21 32 30 24 32 12 C32 5 25 3 18 3 Z"
                        fill="currentColor" />
                    <path d="M7 28 C13 22 19 15 28 8" stroke="#E6F9F0" stroke-width="1.6" stroke-linecap="round" />
                </svg>
            </div>

            <!-- Leaf 3 (Vibrant Lime) -->
            <div class="ambient-leaf leaf-drift-3 top-2 left-[48%]">
                <svg width="34" height="34" viewBox="0 0 36 36" fill="none" class="text-[#84CC16] drop-shadow-sm">
                    <path d="M18 3 C10 8 4 16 4 24 C4 28.5 7.5 32 13 32 C21 32 30 24 32 12 C32 5 25 3 18 3 Z"
                        fill="currentColor" />
                    <path d="M7 28 C13 22 19 15 28 8" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
                </svg>
            </div>
        </div>

        <!-- Main Authentication Container -->
        <div class="max-w-[430px] w-full relative z-20 flex flex-col items-center">

            <!-- Top Page Heading (Outside Card) -->
            <div id="topHeading"
                class="mb-3 sm:mb-5 flex items-center justify-center gap-2.5 font-['Quicksand'] font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#134E4A] drop-shadow-sm select-none text-center">
                <span class="gentle-bounce inline-block text-2xl sm:text-3xl" id="headingIcon">🌱</span>
                <span id="cardBadge">Water Me - A Pet Plant</span>
            </div>

            <!-- Main Authentication Modal Card -->
            <main class="clay-card w-full p-7 sm:p-9 relative text-center transition-all duration-300">

                <!-- Playful Hero Sprout SVG Art -->
                <div
                    class="w-16 h-16 mx-auto mb-3.5 rounded-2xl bg-gradient-to-b from-[#EBF8F0] to-[#D2EFE0] flex items-center justify-center shadow-inner border-2 border-white plant-sway">
                    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- Pot -->
                        <path d="M14 30L17 42H31L34 30H14Z" fill="#D97736" stroke="#9A4C1B" stroke-width="2"
                            stroke-linejoin="round" />
                        <path d="M12 26H36V30H12V26Z" fill="#E68B4C" stroke="#9A4C1B" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <line x1="16" y1="30" x2="32" y2="30" stroke="#7A3E1D" stroke-width="2" />
                        <!-- Stem -->
                        <path d="M24 26V13" stroke="#2D7A46" stroke-width="3" stroke-linecap="round" />
                        <!-- Left Leaf -->
                        <path d="M24 19C16 19 14 12 17 9C20 6 24 13 24 19Z" fill="#38A169" stroke="#226B3D"
                            stroke-width="1.5" stroke-linejoin="round" />
                        <!-- Right Leaf -->
                        <path d="M24 15C32 15 34 8 31 5C28 2 24 9 24 15Z" fill="#48BB78" stroke="#226B3D"
                            stroke-width="1.5" stroke-linejoin="round" />
                        <!-- Tiny Flower/Sparkle -->
                        <circle cx="24" cy="8" r="2.5" fill="#FBBF24" stroke="#D97706" stroke-width="0.8" />
                    </svg>
                </div>

                <!-- Titles & Friendly Message -->
                <h2 class="text-lg sm:text-xl font-bold font-['Quicksand'] text-[#163824] mb-1.5 tracking-tight leading-snug"
                    id="authTitle">Welcome Back!</h2>
                <p class="text-xs text-[#527963] mb-5 font-medium leading-relaxed px-1" id="authSubtitle">Your plant
                    missed you!<br>Step right back in to check on its health today.</p>

                <!-- Form Handling (Linked to loginAction.jsp) -->
                <form action="loginAction.jsp" method="POST" class="space-y-4 text-left">
                    <input type="hidden" name="action" id="authActionInput" value="login">

                    <!-- Username Input -->
                    <div>
                        <label
                            class="block text-[11px] font-bold text-[#2A5239] uppercase tracking-wider mb-1.5 ml-1 flex items-center gap-1.5">
                            <svg class="w-3.5 h-3.5 text-[#36925B]" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span id="usernameLabel">USERNAME</span>
                        </label>
                        <div class="relative">
                            <input type="text" name="username" id="usernameInput" required autocomplete="username"
                                placeholder="who's watering today?"
                                class="clay-input w-full rounded-2xl px-4 py-3 text-sm text-[#1B3524] placeholder-[#81A28D] font-semibold focus:outline-none transition">
                        </div>
                    </div>

                    <!-- Password Input with Toggle View -->
                    <div>
                        <label
                            class="block text-[11px] font-bold text-[#2A5239] uppercase tracking-wider mb-1.5 ml-1 flex items-center gap-1.5">
                            <svg class="w-3.5 h-3.5 text-[#36925B]" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span id="passwordLabel">PASSPHRASE</span>
                        </label>
                        <div class="relative">
                            <input type="password" name="password" id="passwordInput" required
                                autocomplete="current-password" placeholder="your secret passcode"
                                class="clay-input w-full rounded-2xl px-4 py-3 pr-11 text-sm text-[#1B3524] placeholder-[#81A28D] font-semibold focus:outline-none transition">

                            <button type="button" onclick="togglePasswordVisibility()"
                                aria-label="Toggle password visibility"
                                class="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#689A7E] hover:text-[#247E49] transition p-1 focus:outline-none">
                                <!-- Eye Open -->
                                <svg id="eyeOpenIcon" class="w-4 h-4" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <!-- Eye Closed -->
                                <svg id="eyeClosedIcon" class="w-4 h-4 hidden" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Dynamic Error Alerts -->
                    <% if (request.getParameter("error") !=null) { String err=request.getParameter("error"); %>
                        <div
                            class="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-semibold flex items-center justify-center gap-1.5 animate-bounce">
                            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span>
                                <%= "invalid_credentials" .equals(err) ? "Incorrect username or password!" : "" %>
                                    <%= "user_exists" .equals(err) ? "Username is already taken. Try another!" : "" %>
                                        <%= "invalid_input" .equals(err) ? "Please fill in all the required fields."
                                            : "" %>
                                            <%= "server_error" .equals(err)
                                                ? "Database or server error. Please try again!" : "" %>
                            </span>
                        </div>
                        <% } %>

                            <!-- Submit Button -->
                            <button type="submit" id="authSubmitBtn"
                                class="clay-button w-full py-3.5 bg-[#36925B] hover:bg-[#2B7A4B] text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all mt-3">
                                <span id="authSubmitBtnText">Check On My Plant</span>
                                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                        d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                </form>

                <!-- Toggle Mode Switch -->
                <div
                    class="mt-5 pt-4 border-t border-[#E3EFE7] flex items-center justify-center gap-1.5 text-xs text-[#527460]">
                    <span id="authToggleText">First time around?</span>
                    <button type="button" onclick="toggleAuthMode()"
                        class="text-[#247E49] hover:text-[#185A33] font-bold underline transition" id="authToggleBtn">
                        Adopt & Plant a seed here
                    </button>
                </div>

                <!-- Small Warm Footer Note -->
                <div class="mt-3.5 text-[11px] text-[#6E9880] font-semibold" id="plantGreeting">
                    🌿 A quick breeze keeps the leaves dancing!
                </div>
            </main>
        </div>

        <!-- Client-side Logic Script -->
        <script src="assets/js/auth.js"></script>
    </body>

    </html>