/* Permite mostrar el detalle de un plato al momento de dar click */
function mostrarDetallePlato(plato, event) {
  if (event) event.stopPropagation(); // Esto evita que el clic suba al contenedor

  const detalle = document.getElementById("plato");

  const img = plato.querySelector("img");
  const titulo = plato.querySelector("h3").textContent;
  const descripcion = plato.querySelector(".descripcion").textContent;
  const ingredientes = plato.querySelector(".infoAdicional p:nth-of-type(1)").innerHTML;
  const alergenos = plato.querySelector(".infoAdicional p:nth-of-type(2)").innerHTML;
  const precio = plato.querySelector(".precio").textContent;

  document.getElementById("plato-imagen").src = img.src;
  document.getElementById("plato-titulo").textContent = titulo;
  document.getElementById("plato-descripcion").textContent = descripcion;
  document.getElementById("plato-ingredientes").innerHTML = ingredientes;
  document.getElementById("plato-alergenos").innerHTML = alergenos;
  document.getElementById("plato-precio").textContent = precio;

  detalle.style.display = "flex";
}

function cerrarDetallePlato() {
  document.getElementById("plato").style.display = "none";
}



// Estilo para resaltar los <strong> del modal
const style = document.createElement("style");
style.innerHTML = `
  #plato strong {
    font-weight: bold;
    color:#a52a2a;
  }
`;
document.head.appendChild(style);

