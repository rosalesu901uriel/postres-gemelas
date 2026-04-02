const botonMenu = document.querySelector('#boton-menu');
const btnCerrar = document.querySelector('#btn-cerrar');
const navegacion = document.querySelector('#navegacion');
const overlay = document.querySelector('#overlay'); // Seleccionamos el overlay

// Función para ABRIR
botonMenu.addEventListener('click', () => {
    navegacion.classList.add('mostrar-menu');
    overlay.classList.add('mostrar-overlay');
});

// Función para CERRAR (la usaremos en varios clics)
const cerrarTodo = () => {
    navegacion.classList.remove('mostrar-menu');
    overlay.classList.remove('mostrar-overlay');
};

// Cerrar con la X
btnCerrar.addEventListener('click', cerrarTodo);

// CERRAR SI DAN CLIC AL OVERLAY (Cualquier parte oscura)
overlay.addEventListener('click', cerrarTodo);

// Cerrar si dan clic a un enlace
navegacion.addEventListener('click', (e) => {
    if(e.target.classList.contains('navegacion__enlace')) {
        cerrarTodo();
    }
});