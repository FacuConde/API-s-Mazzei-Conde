// Cierra el detalle si se hace clic fuera del contenido
document.querySelectorAll(".plato").forEach(function(plato) {
    plato.addEventListener("click", function(e) {
      if (e.target === e.currentTarget) {
        cerrarDetallePlato(); // solo se ejecuta si se hace clic en el fondo del plato
      }
    });
  });

  
