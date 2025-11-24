let parrafo = null;
const btnCrear = document.getElementById('crear');
const contenedor = document.getElementById('contenedor');
btnCrear.addEventListener('click', () => {
    parrafo = document.createElement('p');
    parrafo.textContent = 'Párrafo creado dinámicamente';
    parrafo.classList.add('parrafo');
    contenedor.appendChild(parrafo);
});

const btnEliminar = document.getElementById('eliminar');
btnEliminar.addEventListener('click', () => {
    if (parrafo) parrafo.remove();
    const parrafos = document
        .getElementsByClassName('parrafo');
    Array.from(parrafos)
        .forEach(parrafo => parrafo.remove());
});

const btnDobleClick = document.getElementById('boton');
btnDobleClick.addEventListener('dblclick', () => {
    alert('¡Has hecho doble click en el botón!');
});

const inputText= document
    .getElementById('nombre');
inputText.addEventListener('input', (event) => {
    console.log('Escribiendo: ' ,event.target.value);
});

const form = document
    .getElementById('formulario');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulario enviado: ' + inputText.value);
});

inputText.addEventListener('keydown', (event) => {
    console.log('Tecla presionada: ', event.key);
});

window.addEventListener('scroll', () => {
    console.log('Desplazamiento en la página');
});