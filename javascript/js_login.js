// Funkcja do ładowania formularza logowania
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
            <p style="text-align: center;"><a href="#" id="registerLink">${translations[currentLanguage].register}</a></p>
        </div>
    `;
    document.getElementById('registerLink').addEventListener('click', loadRegisterForm);
}

// Nasłuchiwacz kliknięcia w "Zaloguj się"
document.getElementById('login').addEventListener('click', function(event) {
    event.preventDefault(); // Zapobiega przeładowaniu strony
    loadLoginForm(); // Ładowanie formularza logowania
});
