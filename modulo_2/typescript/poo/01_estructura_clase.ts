class persona {
    // Atributos
    nombre: string;
    edad: number;

    // Constructor
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Métodos
    saludar(): void {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    }
}

const amigoPedro = new persona("Pedro", 30);
amigoPedro.saludar();
console.log('Nombre');
console.log(amigoPedro.nombre);
console.log('Edad');
console.log(amigoPedro.edad);