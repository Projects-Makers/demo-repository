// Pobiera zapisany język lub ustawia domyślny na polski
let currentLanguage = localStorage.getItem('language') || 'pl';

// Pobiera zapisany motyw lub ustawia domyślny na ciemny
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(`${savedTheme}-theme`);
});
