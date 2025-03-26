document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById("nav");
    const navButton = document.querySelector(".nav-responsive");

    function mostrarOcultarMenu() {
        nav.classList.toggle("active");
        navButton.classList.toggle("active");
    }

    // Asignar el evento al botón
    navButton.addEventListener('click', function(e) {
        e.stopPropagation();
        mostrarOcultarMenu();
    });

    // Cerrar menú al hacer clic en cualquier lugar fuera
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !navButton.contains(event.target)) {
            nav.classList.remove("active");
            navButton.classList.remove("active");
        }
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('#nav a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove("active");
            navButton.classList.remove("active");
        });
    });
});

// Mantener la función seleccionar() para compatibilidad con el HTML existente
function seleccionar() {
    const nav = document.getElementById("nav");
    const navButton = document.querySelector(".nav-responsive");
    nav.classList.remove("active");
    navButton.classList.remove("active");
}