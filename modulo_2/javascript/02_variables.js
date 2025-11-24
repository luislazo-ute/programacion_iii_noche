console.log("VARIABLES");
var saludo1 = "HOLA";
var saludo2="HOLA DESDE UNA VARIABLE";

console.log(saludo1);
console.log(saludo1+saludo2);
console.log(saludo1+" "+saludo2);
console.log(`El saludo es: ${saludo1} ${saludo2} ${4+5}`);

let numero = 24;
const angulo = 45;

console.log(numero, angulo);

console.log("TIPOS DE DATOS");
var nombre = "DARTH VADER";
console.log("string", typeof (nombre));
var tipoNumero = 1000;
console.log("tipo numerico", typeof (tipoNumero));
var tipoBooleano = true;
console.log("tipo booleano", typeof (tipoBooleano));
var tipoIndefinido = undefined;
console.log("tipo indefinido", typeof (tipoIndefinido));
var tipoNulo = null;
console.log("tipo nulo", typeof (tipoNulo));
var tipoSimbolo = Symbol("luis");
console.log("tipo simbolo", typeof (tipoSimbolo));
var tipoBigEntero = 9007199254741991n;
console.log("tipo big entero", typeof (tipoBigEntero));


const persona = {
    nombre: "LUIS",
    edad: 30,
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);