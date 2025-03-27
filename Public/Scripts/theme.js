function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update all theme toggle icons in the document
    const icons = document.querySelectorAll('.theme-toggle-icon');
    icons.forEach(icon => {
        if (theme === 'light') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

// Initialize theme and set up event listeners
function initializeTheme() {
    const currentTheme = getInitialTheme();
    applyTheme(currentTheme);
    
    // Set up theme toggle listeners
    const themeToggles = document.querySelectorAll('#themeToggle');
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeTheme);

// Apply theme immediately
applyTheme(getInitialTheme());

// Add event listener for navigation changes
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        setTimeout(() => {
            applyTheme(getInitialTheme());
        }, 100);
    }
});