// Obsługuje kliknięcia w elementy menu i renderuje odpowiednie treści
document.getElementById('home').addEventListener('click', function() {
    renderHomePage(currentLanguage); // Wyświetla stronę główną
    toggleMenu();  // Zamyka menu
});

document.getElementById('settings').addEventListener('click', function() {
    renderSettings(currentLanguage); // Wyświetla ustawienia
    toggleMenu();  // Zamyka menu
});
