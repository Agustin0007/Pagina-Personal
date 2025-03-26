// Check for saved theme preference or default to 'dark'
function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
}

// Apply theme to document
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const icon = document.querySelector('#themeToggle i');
    if (theme === 'light') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getInitialTheme());
    
    // Theme toggle button event listener
    document.getElementById('themeToggle').addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });
});

