console.log("FUNCIONES");
console.log("FUNCION SIMPLE");

function saludar(){
    console.log("Hola de parte del Poderoso Tercer Semestre");
}

saludar();

console.log("FUNCION CON PARAMETROS");

function suma(a, b){
    return a + b;
}
console.log("resultado suma es: ", suma(5, 3));

console.log("funcion flecha");
const funcionFlecha = () => {
    console.log("Hola desde la funcion flecha");
}
funcionFlecha();

console.log("funcion flecha con parametros");
const funcionFlechaConParametros = (nombre) => {
    console.log("Hola", nombre, "desde la funcion flecha");
}
funcionFlechaConParametros("Mayra");

console.log("funcion retorno directo");
const cuadrado = x => x * x;
console.log("El cuadrado de 5 es: ", cuadrado(5));

console.log("funcion con parametros por defecto");

function division(z, k=3) {
    return z / k;
}
console.log("Resultado division: ", division(9));
console.log("Resultado division con segundo parametro: ", division(9, 2));