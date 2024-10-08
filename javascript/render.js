function renderHomePage(lang) {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <h2>${translations[lang].homeTitle}</h2>
        <p>${translations[lang].homeContent}</p>
    `;
}

function renderSettings(lang) {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <h2>${translations[lang].settingsTitle}</h2>
        <div class="settings-container">
            <div class="setting-item">
                <label for="theme">${translations[lang].themeLabel}</label>
                <select id="theme">
                    <option value="light">${translations[lang].lightTheme} <span class="icon-sun">☀️</span></option>
                    <option value="dark" ${localStorage.getItem('theme') === 'dark' ? 'selected' : ''}>${translations[lang].darkTheme} <span class="icon-moon">🌙</span></option>
                </select>
            </div>
            <div class="setting-item">
                <label for="language">${translations[lang].languageLabel}</label>
                <select id="language">
                    <option value="pl" ${lang === 'pl' ? 'selected' : ''}>${translations[lang].polishLanguage}</option>
                    <option value="en" ${lang === 'en' ? 'selected' : ''}>${translations[lang].englishLanguage}</option>
                </select>
            </div>
        </div>
    `;
}

function renderMenu(lang) {
    const menuItems = document.querySelectorAll('#menu ul li');
    menuItems[0].textContent = translations[lang].homeTitle;
    menuItems[1].textContent = translations[lang].about;
    menuItems[2].textContent = translations[lang].gallery;
    menuItems[3].textContent = translations[lang].settingsTitle;
    document.getElementById('login').textContent = translations[lang].login;
}

function loadLoginForm() {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <div class="login-container">
            <h2>${translations[currentLanguage].login}</h2>
            <form id="loginForm" method="POST" action="login.php">
                <input type="text" name="username" placeholder="${translations[currentLanguage].usernamePlaceholder}" required>
                <input type="password" name="password" placeholder="${translations[currentLanguage].passwordPlaceholder}" required>
                <button type="submit">${translations[currentLanguage].login}</button>
            </form>
            <p style="text-align: center;"><a href="#" id="registerLink">Zarejestruj się</a></p>
        </div>
    `;
    document.getElementById('registerLink').addEventListener('click', loadRegisterForm);
}

function loadRegisterForm() {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <div class="login-container">
            <h2>${translations[currentLanguage].register}</h2>
            <form id="registerForm" method="POST" action="register.php">
                <input type="text" name="username" placeholder="${translations[currentLanguage].usernamePlaceholder}" required>
                <input type="password" name="password" placeholder="${translations[currentLanguage].passwordPlaceholder}" required>
                <button type="submit">${translations[currentLanguage].register}</button>
            </form>
            <p style="text-align: center;"><a href="#" id="loginLinkBack">Zaloguj się</a></p>
        </div>
    `;
    document.getElementById('loginLinkBack').addEventListener('click', loadLoginForm);
}

let currentLanguage = localStorage.getItem('language') || 'pl';
renderHomePage(currentLanguage);
renderMenu(currentLanguage);