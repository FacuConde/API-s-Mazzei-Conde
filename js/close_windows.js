// Cierra el detalle si se hace clic fuera del contenido
document.getElementById("plato").addEventListener("click", function (e) {
    if (e.target === this) {
        cerrarDetallePlato();
    }
});
