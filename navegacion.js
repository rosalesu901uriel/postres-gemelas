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

/* ==========================================
   BOTÓN FLOTANTE (BACK TO TOP)
   ========================================== */
// 1. Seleccionamos el botón por su ID
const btnSubir = document.querySelector('#btn-subir');

// 2. Escuchamos el evento 'scroll' en la ventana del navegador
window.onscroll = function() {
    // Si el scroll bajó más de 300px desde el tope...
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        // ...agregamos la clase que lo hace visible
        btnSubir.classList.add('mostrar-btn');
    } else {
        // ...si está cerca del tope, se la quitamos para que desaparezca
        btnSubir.classList.remove('mostrar-btn');
    }
};


// 3. Escuchamos el evento 'pointerup' (funciona mejor que 'click' en móviles)
btnSubir.addEventListener('pointerup', (e) => {
    // Evitamos cualquier comportamiento extraño por defecto
    e.preventDefault();

    // Ejecuta el movimiento hacia arriba
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});