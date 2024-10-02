// Ustawia domyślny motyw na podstawie localStorage
function setDefaultTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(`${savedTheme}-theme`);
}

// Nasłuchuje zmiany motywu i języka
document.addEventListener('change', function(event) {
    if (event.target.id === 'theme') {
        const newTheme = event.target.value;
        document.body.classList.toggle('light-theme', newTheme === 'light');
        document.body.classList.toggle('dark-theme', newTheme === 'dark');
        localStorage.setItem('theme', newTheme); // Zapisuje wybrany motyw
    } else if (event.target.id === 'language') {
        currentLanguage = event.target.value;
        localStorage.setItem('language', currentLanguage); // Zapisuje wybrany język
        renderHomePage(currentLanguage); // Przeładowuje stronę główną
        renderSettings(currentLanguage); // Przeładowuje ustawienia
        renderMenu(currentLanguage); // Przeładowuje menu
    }
});
