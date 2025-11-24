const caja = document.getElementById('caja');
caja.addEventListener('mouseover', () => {
    caja.style.background = 'lightblue';
});
caja.addEventListener('mouseout', () => {
    caja.style.background = 'lightgray';
});

caja.addEventListener('click', (event) => {
    alert('Has hecho click en la caja') ;
});