// 1. Utilice el ciclo For para imprimir en la consola los números 
// del 100 al 1 en orden descendente. 
// Como por ejemplo: "100, 99, 98, 97,...3, 2, 1"

// for(let numero = 100; numero >= 1; numero = numero - 1){
//     console.log(numero);
// }

// let numero = 1000
// while(numero >= 1){
//     console.log(numero);
//     numero = numero - 1
// }

// ------------------------------------------------------------------------
// 2. Utilice el ciclo For para sumar todos los números pares del 1 al 
// 20 e imprimir el resultado. Como por ejemplo: los números pares del 
// 1 al 20 son: 2, 4,..., 18, 20 y su suma es igual a "110", mostrar
//  unicamente en consola el resultado de la suma, es decir "110"

// 

// let suma = 0;
// for(let num = 2; num <= 20; num = num + 2){
//     suma = suma + num
// }

// console.log(suma);

// 3. Teniendo un array `let myArray = ["hola", "como", "estas", "hoy", "dia"]`, escribe un programa que invierta el 
// orden de los elementos en un nuevo array `let invertido = []`, utiliza un ciclo for para 
// recorrer el array `let myArray`. Al final mostrar `let invertido = ["dia", "hoy", "estas",
// "como", "hola"]`
//for(variable incial; condicion; incremento){Que queremos que pase si se 
    // cumple la condicion}

let myArray = ["hola", "como", "estas", "hoy", "dia"];
let invertido = [];

for(let posicion = myArray.length - 1; posicion >= 0; posicion = posicion - 1){
    invertido.push(myArray[posicion]);
}

console.log(invertido);

