// Ustawienie domyślnego języka
let currentLanguage = localStorage.getItem('language') || 'pl';

// Nasłuchiwacz zmiany języka
document.addEventListener('change', function(event) {
    if (event.target.id === 'language') {
        currentLanguage = event.target.value;
        localStorage.setItem('language', currentLanguage); // Zapisanie wybranego języka
        renderHomePage(currentLanguage); // Ponowne renderowanie strony głównej
        renderSettings(currentLanguage); // Ponowne renderowanie ustawień
        renderMenu(currentLanguage); // Ponowne renderowanie menu
    }
});
