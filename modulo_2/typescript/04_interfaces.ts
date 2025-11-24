interface Usuario {
    id: number;
    nombre: string;
    email: string;
}

const usuario1: Usuario = {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan.perez@example.com"
};

console.log(usuario1);
console.log(usuario1.nombre);

interface Producto {
    id: number;
    nombre: string;
    precio?: number;
}

const producto1: Producto = {
    id: 101,
    nombre: "Laptop"
    // precio es opcional
};

const producto2: Producto = {
    id: 102,
    nombre: "Smartphone",
    precio: 699.99
};

console.log(producto1);
console.log(producto2.precio);
console.log(producto2);
