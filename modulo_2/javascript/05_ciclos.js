console.log("CICLOS O BUCLES");
console.log("CICLO FOR");
for (let i = 1; i <= 5; i++) {
    console.log("Numero: " , i);
}

let suma=0;
for(let i=1; i<=5; i++){
    suma += i; // suma = suma + i
}
console.log("La suma es: " , suma);

let pais="ecuador";
for (let i = 0; i < pais.length; i++) {
    console.log(pais[i]);
}

for (let i=1; i<=5; i++){
    console.log(`Cuadrado de ${i} es ${i*i}`);
}