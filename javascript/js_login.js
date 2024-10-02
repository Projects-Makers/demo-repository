// Funkcja do ładowania formularza logowania
function loadLoginForm() {
    const tresc = document.getElementById('tresc');
    // Renderowanie formularza logowania
    tresc.innerHTML = 
        `<div class="login-container">
            <h2>${translations[currentLanguage].login}</h2>
            <form id="loginForm" method="POST" action="login.php">
                <input type="text" name="username" placeholder="${translations[currentLanguage].usernamePlaceholder}" required>
                <input type="password" name="password" placeholder="${translations[currentLanguage].passwordPlaceholder}" required>
                <button type="submit">${translations[currentLanguage].login}</button>
            </form>
            <p style="text-align: center;"><a href="#" id="registerLink">${translations[currentLanguage].register}</a></p>
        </div>`;
    // Dodanie nasłuchiwacza do przejścia na formularz rejestracji
    document.getElementById('registerLink').addEventListener('click', loadRegisterForm);
}

