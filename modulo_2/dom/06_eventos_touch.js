const areaTouch = document.getElementById('areaTouch');
areaTouch.addEventListener('touchstart', () => {
    areaTouch.style.background = 'lightblue';
});
areaTouch.addEventListener('touchend', () => {
    areaTouch.style.background = 'lightgray';
    alert('¡TOUCH FINALIZADO!');
});