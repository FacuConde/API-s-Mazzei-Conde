/* Permite mostrar las categorías del menú */
document.querySelectorAll('.categoria_boton').forEach(header => {
    header.addEventListener('click', () => {
        const categoria = header.parentElement;
        categoria.classList.toggle('abierta');
    });
});