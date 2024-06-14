// Algoritmia

// Un diagrama de flujo, representa la esquematizacion grafica de un algoritmo, el cual muestra graficamente los
// pasos o procesos a seguir para alcanzar la solucion de un problema.
// Su correcta construccion es sumamente importante porque, a partir del mismo se escribe un programa en 
// algun lenguaje (JS).

// Ejercicio #1
// Escribe un programa que determine si una persona es elegible para votar. La persona debe tener por los menos
// 18 años para votar. El programa debe pedir la edad al usuario y luego imprimir si puede votar o no.

// let edad = 23

// if(edad > 18){
//     console.log("Usted puede votar")
// } else {
//     console.log("eres menor de edad")
// }

// Ejercicio #2.
// sumar los primeros 20 numeros naturales. Ciclos
// 1. Inicializar una variable suma = 0
// 2. Inicalizar una variable i = 1

// let i = 1
// let suma = 0

// while(i < 20){
//     suma = suma + i
//     i = i + 1
// }

// console.log(suma);


// Realizar la succesion de Fibonacci, con un limite de 20

let limit = 20;
let n1 = 0;
let n2 = 1;
console.log(n1)
console.log(n2)
let suma = n1 + n2;

while(suma < limit){
    console.log(suma);
    n1 = n2
    n2 = suma
    suma = n1 + n2
}



