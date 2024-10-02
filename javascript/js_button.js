function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        hamburger.style.display = 'flex';
    } else {
        menu.classList.add('open');
        hamburger.style.display = 'none';
    }
}
// Nasłuchiwacz kliknięcia w "Strona główna"
document.getElementById('home').addEventListener('click', function() {
    renderHomePage(currentLanguage); // Renderowanie treści na stronie głównej
    toggleMenu();  // Zamknięcie menu po kliknięciu w "Strona główna"
});

// Nasłuchiwacz kliknięcia w "Ustawienia"
document.getElementById('settings').addEventListener('click', function() {
    renderSettings(currentLanguage);
    toggleMenu();  // Zamknięcie menu po kliknięciu w "Ustawienia"
});
