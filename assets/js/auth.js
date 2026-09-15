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

    if (authActionInput) authActionInput.value = isLogin ? 'login' : 'register';
    if (authTitle) authTitle.innerText = isLogin ? 'Welcome Back!' : 'Adopt Your Garden 🌱';
    if (authSubtitle) authSubtitle.innerText = isLogin
        ? 'Log in to care for your blossoming companions'
        : 'Create your greenhouse account & adopt your first sprout';
    if (authSubmitBtnText) authSubmitBtnText.innerText = isLogin ? 'Enter Greenhouse' : 'Register & Start Garden';
    if (authToggleText) authToggleText.innerText = isLogin ? 'New gardener here?' : 'Already have a garden?';
    if (authToggleBtn) authToggleBtn.innerText = isLogin ? 'Create an account' : 'Log In';
    if (plantGreeting) plantGreeting.innerText = isLogin ? '🌿 Your plants missed you!' : '🌸 Start your mindful green sanctuary!';
    if (cardBadge) cardBadge.innerText = isLogin ? '🌱 Greenhouse Sanctuary' : '✨ New Gardener Sign Up';
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