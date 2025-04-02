/* Permite abrir la imagen al momento de hacer click en la misma */
function mostrarImagen(imagen) {
    var contenedor = document.getElementById('imagen-ampliada');
    var imagenGrande = document.getElementById('imagen-grande');
    imagenGrande.src = imagen.src;  // Copiar la fuente de la imagen
    contenedor.style.display = 'flex';  // Mostrar el contenedor
}

/* Permite cerrar la imagen al momento de hacer click en pantalla */
function cerrarImagen() {
    var contenedor = document.getElementById('imagen-ampliada');
    contenedor.style.display = 'none';  // Ocultar el contenedor cuando se haga clic
}

/* Permite mostrar el logo y la bienvenida en pantalla */
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("intro").classList.add("visible");
    }, 500); // Retraso opcional para suavizar la transición
});