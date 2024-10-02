// Funkcja do renderowania treści w menu
function renderMenu(lang) {
    const menuItems = document.querySelectorAll('#menu ul li');
    menuItems[0].textContent = translations[lang].homeTitle; // Strona główna
    menuItems[1].textContent = translations[lang].about; // O nas
    menuItems[2].textContent = translations[lang].gallery; // Galeria
    menuItems[3].textContent = translations[lang].settingsTitle; // Ustawienia
    document.getElementById('login').textContent = translations[lang].login; // Zaloguj się
}
