// Funkcja do ustawienia domyślnego motywu
function setDefaultTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(`${savedTheme}-theme`);
}

// Nasłuchiwacze dla wyboru motywu
document.addEventListener('change', function(event) {
    if (event.target.id === 'theme') {
        const newTheme = event.target.value;
        document.body.classList.toggle('light-theme', newTheme === 'light');
        document.body.classList.toggle('dark-theme', newTheme === 'dark');
        localStorage.setItem('theme', newTheme); // Zapisanie wybranego motywu
    }
});

// Ustawienie motywu na podstawie localStorage
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(`${savedTheme}-theme`);
});
