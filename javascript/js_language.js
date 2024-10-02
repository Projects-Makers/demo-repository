// Renderuje stronę główną na podstawie wybranego języka
function renderHomePage(lang) {
    const tresc = document.getElementById('tresc');
    tresc.innerHTML = `
        <h2>${translations[lang].homeTitle}</h2>
        <p>${translations[lang].homeContent}</p>
    `;
}

// Renderuje menu na podstawie wybranego języka
function renderMenu(lang) {
    const menuItems = document.querySelectorAll('#menu ul li');
    menuItems[0].textContent = translations[lang].homeTitle;
    menuItems[1].textContent = translations[lang].about;
    menuItems[2].textContent = translations[lang].gallery;
    menuItems[3].textContent = translations[lang].settingsTitle;
    document.getElementById('login').textContent = translations[lang].login; // Zmiana tekstu "Zaloguj się"
}
