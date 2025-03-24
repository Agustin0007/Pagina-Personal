window.onload = function() {
    // Selecciona la imagen y las cuadrados
    const titulos = document.querySelector('.titulos');
    const cuadradoss = document.querySelectorAll('.cuadrados');

    // Aplica la transición a la imagen
    titulos.style.opacity = 1; // Hace visibles los títulos

    // Aplica la transición a las cuadradoss
    cuadradoss.forEach((cuadrados, index) => {
        setTimeout(() => {
            cuadrados.style.opacity = 1; // Hace visible la cuadrados
        }, index * 500); // Retraso para cada cuadrados
    });
};