// Check for saved theme preference or default to 'dark'
function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
}

// Apply theme to document
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update icon
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        if (theme === 'light') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
}

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme on page load
    const currentTheme = getInitialTheme();
    applyTheme(currentTheme);
    
    // Theme toggle button event listener
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }
});

// Apply theme immediately to prevent flash of wrong theme
applyTheme(getInitialTheme());
