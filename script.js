document.addEventListener("DOMContentLoaded", function () {
    const toggleDarkModeButton = document.getElementById("toggleDarkMode");
    const body = document.body;

    toggleDarkModeButton.addEventListener("click", function () {
        body.classList.toggle("dark-theme");
    });
});
