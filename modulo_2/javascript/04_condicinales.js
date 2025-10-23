console.log("CONDICIONALES");
console.log("CONDICIONAL IF");
let temperatura=45;
if (temperatura > 30) {
    console.log("Hace calor");
} 

console.log("CONDICIONAL IF - ELSE");
const pasword="admin123";
if (pasword=="admin123") {
    console.log("usuario logueado");
} else {
    console.log("usuario no autorizado");
}

console.log("CONDICIONAL ANIDADOS");
const edad=19;
const tieneLicencia=true;
if (edad > 18) {
    if (tieneLicencia==true) {
        console.log("Puede conducir");
    } else {
        console.log("Necesita una licencia para conducir");
    }
} else {
    console.log("Es menor de edad");
}

//mismo resultado con operador logico AND

const edad2=19;
const tieneLicencia2=true;
if (edad2 > 18 && tieneLicencia2 == true) {
    console.log("Puede conducir");
} else if (edad2 > 18 && tieneLicencia2 == false) {
    console.log("Necesita una licencia para conducir");
} else {
    console.log("Es menor de edad");
}

console.log("CONDICIONAL SWITCH");
const dia="lunes";
switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("dia laboral");
        break;
    case "sabado":
    case "domingo":
        console.log("fin de semana");
        break;
    default:
        console.log("dia no valido");
}