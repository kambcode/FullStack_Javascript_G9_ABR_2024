// let suma = 0

// for(let numero = 2; numero <= 20; numero += 2){
//     suma = suma + numero;
// }

// console.log(suma);

// Teniendo un array let myArray = [1, 2, 3, 4, 5],
//  escribe un programa que invierta el orden de los
//   elementos en un nuevo array let invertido = [], 
//   utiliza un ciclo for para recorrer el array let myArray.

let myArray = [1, 2, 3, 4, 5];
let invertido = [];

for (let numero = 4; numero >= 0; numero = numero - 1){
    invertido.push(myArray[numero])
}

console.log(invertido);