document.getElementById('settings').addEventListener('click', function() {
    renderSettings(currentLanguage);
    toggleMenu();
});

document.getElementById('home').addEventListener('click', function() {
    renderHomePage(currentLanguage);
    toggleMenu();
});

document.addEventListener('change', function(event) {
    if (event.target.id === 'theme') {
        const newTheme = event.target.value;
        document.body.classList.toggle('light-theme', newTheme === 'light');
        document.body.classList.toggle('dark-theme', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    } else if (event.target.id === 'language') {
        currentLanguage = event.target.value;
        localStorage.setItem('language', currentLanguage);
        renderHomePage(currentLanguage);
        renderSettings(currentLanguage);
        renderMenu(currentLanguage);
    }
});

document.getElementById('login').addEventListener('click', function(event) {
    event.preventDefault();
    loadLoginForm();
});