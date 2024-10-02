// Funkcja do ładowania formularza rejestracji
function loadRegisterForm() {
    const tresc = document.getElementById('tresc');
    // Renderowanie formularza rejestracji
    tresc.innerHTML = 
        `<div class="login-container">
            <h2>${translations[currentLanguage].register}</h2>
            <form id="registerForm" method="POST" action="register.php">
                <input type="text" name="username" placeholder="${translations[currentLanguage].usernamePlaceholder}" required>
                <input type="password" name="password" placeholder="${translations[currentLanguage].passwordPlaceholder}" required>
                <button type="submit">${translations[currentLanguage].register}</button>
            </form>
            <p style="text-align: center;"><a href="#" id="loginLinkBack">${translations[currentLanguage].login}</a></p>
        </div>`;
    // Dodanie nasłuchiwacza do powrotu do formularza logowania
    document.getElementById('loginLinkBack').addEventListener('click', loadLoginForm);
}
