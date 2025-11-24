console.log("CICLOS O BUCLES");
console.log("CICLO WHILE");
let i = 1;
while (i <= 3) {
    console.log("Contador: ", i);
    i++;
}

let valores =[3,4,-2,4,5];
let indice = 0;
while (valores[indice] >= 0){
    console.log("Valor valido: ", valores[indice]);
    indice++;
}

let n = 1;
while (n < 10){
    if (n % 2 !== 0){
        console.log(n, "Es impar");
    }
    n++;
}

let x=1;
do {
    console.log("interacion: ", x);
    x++;
} while (x < 5);


let contador=1;
suma = 0;
do {
    suma += contador;
    contador++;
} while (contador <= 5);
console.log("La suma es: ", suma);

let reduccion = 10;
do {
    console.log("reduccion: ", reduccion);
    reduccion--;
} while (reduccion >= 0);


let luis = 6;
let mul = 1;
do {
    console.log(luis, "x", mul, "=", luis * mul);
    mul++;
} while (mul <= 10);



