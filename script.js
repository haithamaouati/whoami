const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check if a user preference for dark mode is already set
if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-theme');
    localStorage.setItem('dark-mode', 'enabled');
}

function disableDarkMode() {
    body.classList.remove('dark-theme');
    localStorage.setItem('dark-mode', 'disabled');
}
