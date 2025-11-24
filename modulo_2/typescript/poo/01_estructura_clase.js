var persona = /** @class */ (function () {
    // Constructor
    function persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Métodos
    persona.prototype.saludar = function () {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    };
    return persona;
}());
var amigoPedro = new persona("Pedro", 30);
amigoPedro.saludar();
console.log('Nombre');
console.log(amigoPedro.nombre);
console.log('Edad');
console.log(amigoPedro.edad);
