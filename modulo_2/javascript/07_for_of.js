console.log("CICLOS O BUCLES");
console.log("FOR OF");

const nombres = ["Ana", "Luis", "Carlos", "María"];
for (const nombre of nombres) {
    console.log("Hola", nombre);
}

const nombre = "francisco";
for (const letra of nombre) {
    console.log("letra", letra);
}

const numeros = [10,555,6,88,75,16,122];
let mayor = 0;
for (const numero of numeros) {
    if (numero > mayor) {
        mayor = numero;
    }
}
console.log("El mayor es", mayor);

const persona = {
    nombre: "Anakin",
    apellido: "Skywalker",
    profesion: "Jedi"
};
for (const clave in persona) {
    console.log("clave",clave, ":", persona[clave]);
}

const libro = {
    titulo: "luis",
    autor: "luis lazo",
    anio: 2020
};
suma_claves = 0;
for (const clave in libro) {
    suma_claves++;
}
console.log("El objeto libro tiene", suma_claves, "claves.");