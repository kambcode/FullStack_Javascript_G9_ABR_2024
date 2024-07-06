// MAP, FILTER, FIND, FOREACH, SOME, EVERY
const numbers = [1,2,3,4,5,6,7,8];

// map: Crea un nuevo array con los resultados de la llamar una función (callback) como argumento en cada elemento del array original.

// Forma tradicional
/*const newArray = [];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const sqrtNumber = Math.sqrt(number);
    newArray.push(sqrtNumber);
}
console.log(newArray);*/

/*const newArray = numbers.map(number => Math.sqrt(number));
console.log(newArray);*/


// filter: Retorna un nuevo array con todos los elementos que pasen una condicion proporcionada por una función (callback)

// Forma tradicional
/*const newArray = [];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0) {
        newArray.push(number);
    }
}
console.log(newArray);*/

/*const newArray = numbers.filter(number => number % 2 === 0);
console.log(newArray);*/

// Tambien es posible combinar o fusionar varios metodos de un array en una misma asignacion de variable
// En este caso se esta filtrando los numeros pares del array numbers, despues a ese array resultante
// se le esta calculando la raiz cuadrada de cada numero, y finalmente se esta filtrando esas raices cuadradas
// para saber si es mayor a 2

/*const result = numbers
    .filter(number => number % 2 === 0)
    .map(number => Math.sqrt(number))
    .filter(number => number > 2);
console.log(result);*/


// find: Este método retorna el primer elemento de un array que cumple una condicion dada en el callback
// Si no encuentra ningun elemento que cumpla con la condicion, retorna undefined

// Forma tradicional
/*let numberFound;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number < 7 && number > 4) {
        numberFound = number;
        console.log(numberFound);
        return;
    }
}*/

/*const anyNumber = numbers.find(number => number < 7 && number > 4);
console.log(anyNumber);*/


// forEach: Ejecuta una funcion por cada elemento del array. No retorna nada.

// Forma tradicional
/*for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(`${i}: ${number}`);
}*/

numbers.forEach((number, i) => {
    console.log(`${i}`);
    console.log(`${number}`);
    console.log('------');
});


// some: Retorna true si al menos un elemento del array cumple con la condicion dada en el callback
// Si no, retorna false
const numeros = [99,105,224,574,65];
const someIsGreaterThan500 = numeros.some(numero => numero > 400);
const someStarsWith9 = numeros.some(numero => String(numero).startsWith('9'));
console.log('Alguno es mas mayor que 500? ', someIsGreaterThan500);
console.log('Alguno empieza por 9? ', someStarsWith9);


// every: Retorna true si todos los elementos del array cumplen una condicion dada en el callback.
// Si no, retorna false
const listaEdades = [20,22,23,32,35,37,17];
const todosSonMayoresDeEdad = listaEdades.every(edad => edad >= 18);
console.log('Todos son mayores de edad? ', todosSonMayoresDeEdad);


// includes: Retorna true si encuentra un elemento que coincide con el valor que le pasamos como argumento
console.log('Esta el numero? ', numeros.includes(106));

// RETOS
let numbers1 = [21, 33, 40, 50, 71, 70, 742, 80, 90, 100];

// 1. Retornar un nuevo array con el doble de cada numero
const dobles = numbers1.map(numero => numero * 2);
console.log(dobles);

// 2. Retornar un nuevo array que filtre los numeros que empiecen en 7 y sean pares
const empiezaSieteYEsPar = numbers1.filter(number => String(number).startsWith("7") && number % 2 === 0)
console.log(empiezaSieteYEsPar);