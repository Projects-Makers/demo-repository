// Funkcja do ustawienia domyślnego motywu
function setDefaultTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    // Ustawienie klasy dla domyślnego motywu
    document.body.classList.add(`${savedTheme}-theme`);
}

// Funkcja do zmiany motywu
function changeTheme(theme) {
    document.body.classList.toggle('light-theme', theme === 'light');
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('theme', theme); // Zapisanie wybranego motywu w localStorage
}

// Ustawienie domyślnego motywu przy ładowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    setDefaultTheme();
});
