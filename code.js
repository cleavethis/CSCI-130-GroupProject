/* 
Wanted to add a toggle button to switch between light and dark mode
in case someone prefers one over the other 
*/
const toggleModeButton = document.getElementById('toggleModeButton');
toggleModeButton.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        toggleModeButton.textContent = 'Switch to Dark Mode 🌙';
    } else {
        toggleModeButton.textContent = 'Switch to Light Mode ☀️';
    }
});
