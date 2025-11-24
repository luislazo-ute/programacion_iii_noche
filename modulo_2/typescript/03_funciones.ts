function saludar(): string {
    return "¡Hola desde una función en TypeScript!";
}

console.log(saludar());

function suma(): number {
    return 5 + 3;
}

console.log(suma());

function sumar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

console.log(sumar(5, 3));
console.log(sumar(10, 20));

function sumarOpcional(numero1: number, numero2?: number): number {
    return numero1 + (numero2 || 0);
    // return numero1 + (numero2 ? numero2 : 0);
}
console.log(sumarOpcional(5, 3));
console.log(sumarOpcional(10));

const sumarFlecha = (numero1: number, numero2?: number): number => {
    return numero1 + (numero2 || 0);
}
console.log(sumarFlecha(7, 2));
console.log(sumarFlecha(15));

function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);
}
mostrarMensaje("Este es un mensaje desde una función que no retorna nada.");