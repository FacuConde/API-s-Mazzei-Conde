document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll(".categoria_boton");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const categoria = boton.parentElement;
            const contenidoVisible = categoria.classList.contains("abierto");

            // Alterna clase para mostrar/ocultar
            categoria.classList.toggle("abierto");

            // Cambia el texto "Ver más" por "Ver menos"
            const textoVerMas = boton.querySelector("h3");
            if (contenidoVisible) {
                textoVerMas.textContent = "Ver más";
            } else {
                textoVerMas.textContent = "Ver menos";
            }
        });
    });
});
