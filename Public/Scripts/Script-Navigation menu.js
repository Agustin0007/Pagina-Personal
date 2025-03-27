let menuVisible = false;

function mostrarOcultarMenu(){
    const nav = document.getElementById("nav");
    if(menuVisible){
        nav.classList.remove("responsive");
        menuVisible = false;
    }else{
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}

window.onscroll = function(){
    efectoHabilidades();
} 

// Asegurar que el menú esté oculto al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const nav = document.getElementById("nav");
    const navButton = document.querySelector(".nav-responsive");
    
    if (menuVisible && !nav.contains(event.target) && !navButton.contains(event.target)) {
        nav.classList.remove("responsive");
        menuVisible = false;
    }
});

function mostrarOcultarMenu(){
    const nav = document.getElementById("nav");
    const menuBtn = document.querySelector(".nav-responsive");
    if(menuVisible){
        nav.classList.remove("responsive");
        menuBtn.classList.remove("active");
        menuVisible = false;
    }else{
        nav.classList.add("responsive");
        menuBtn.classList.add("active");
        menuVisible = true;
    }
}

