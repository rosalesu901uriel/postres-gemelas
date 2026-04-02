// Seleccionar elementos
const botonMenu = document.querySelector('#boton-menu');
const navegacion = document.querySelector('#navegacion');

// Evento para abrir/cerrar menú
botonMenu.addEventListener('click', () => {
    navegacion.classList.toggle('mostrar-menu');
});

// Cerrar el menú si hacen clic en un enlace (para móviles)
navegacion.addEventListener('click', () => {
    navegacion.classList.remove('mostrar-menu');
});