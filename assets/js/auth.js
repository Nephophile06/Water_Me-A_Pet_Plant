let isLogin = true;

function toggleAuthMode() {
    isLogin = !isLogin;

    const form = document.querySelector('form');
    if (form) form.reset();

    const authActionInput = document.getElementById('authActionInput');
    const authTitle = document.getElementById('authTitle');
    const authSubtitle = document.getElementById('authSubtitle');
    const authSubmitBtnText = document.getElementById('authSubmitBtnText');
    const authToggleText = document.getElementById('authToggleText');
    const authToggleBtn = document.getElementById('authToggleBtn');
    const plantGreeting = document.getElementById('plantGreeting');
    const cardBadge = document.getElementById('cardBadge');
    const headingIcon = document.getElementById('headingIcon');
    const usernameLabel = document.getElementById('usernameLabel');
    const usernameInput = document.getElementById('usernameInput');
    const passwordLabel = document.getElementById('passwordLabel');
    const passwordInput = document.getElementById('passwordInput');

    if (authActionInput) authActionInput.value = isLogin ? 'login' : 'register';

    // Top Heading outside Card
    if (headingIcon) headingIcon.innerText = isLogin ? '🌱' : '✨';
    if (cardBadge) cardBadge.innerText = isLogin ? 'Water Me - A Pet Plant' : 'First Time?';

    // Inside Box Main & Sub Headings
    if (authTitle) {
        authTitle.innerHTML = isLogin
            ? 'Welcome Back!'
            : 'Adopt a Green Buddy to<br>soothe your eyes! 🌱';
    }
    if (authSubtitle) {
        authSubtitle.innerHTML = isLogin
            ? 'Your plant missed you!<br>Step right back in to check on its health today.'
            : 'Every tiny seed needs a friendly human.<br>Set up your cozy corner and watch life sprout!';
    }

    // Username Input Label & Placeholder
    if (usernameLabel) usernameLabel.innerText = isLogin ? 'USERNAME' : 'CHOOSE A USERNAME';
    if (usernameInput) usernameInput.placeholder = isLogin ? "who's watering today?" : 'e.g. leafy_friend';

    // Password Input Label & Placeholder
    if (passwordLabel) passwordLabel.innerText = isLogin ? 'PASSPHRASE' : 'SECRET PASSPHRASE';
    if (passwordInput) passwordInput.placeholder = isLogin ? 'your secret passcode' : 'to protect your space';

    // Action Button & Footer Links
    if (authSubmitBtnText) authSubmitBtnText.innerText = isLogin ? 'Check On My Plant' : 'Plant My First Seed 🌱';
    if (authToggleText) authToggleText.innerText = isLogin ? 'First time around?' : 'Tended a plant before?';
    if (authToggleBtn) authToggleBtn.innerText = isLogin ? 'Adopt & Plant a seed here' : 'Hop back in';
    if (plantGreeting) plantGreeting.innerText = isLogin
        ? 'A quick breeze keeps the leaves dancing!'
        : 'Your little sprout is already excited to meet you!';
}

function togglePasswordVisibility() {
    const passInput = document.getElementById('passwordInput');
    const eyeOpen = document.getElementById('eyeOpenIcon');
    const eyeClosed = document.getElementById('eyeClosedIcon');

    if (passInput) {
        if (passInput.type === 'password') {
            passInput.type = 'text';
            if (eyeOpen) eyeOpen.classList.add('hidden');
            if (eyeClosed) eyeClosed.classList.remove('hidden');
        } else {
            passInput.type = 'password';
            if (eyeOpen) eyeOpen.classList.remove('hidden');
            if (eyeClosed) eyeClosed.classList.add('hidden');
        }
    }
}