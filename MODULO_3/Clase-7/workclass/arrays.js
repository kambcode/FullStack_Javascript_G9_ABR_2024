// ARRAYS
// Es una estructura de datos que puede contener múltiples elementos, 
// accesibles a través de un índice numérico (empieza en 0).
// Cada elemento que se guarda dentro de un arreglo o lista
// puede ser de cualquier tipo de dato, tanto primitivo como objetos y arrays.
const array = [1, 2, 3, 'text', true, false, ['estudiante1', 'estudiante2']];
console.log(array);

// Acceso a un elemento dentro de un array
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

console.log('length: ', array.length);

console.log(array[5]);

console.log(array[6]);
console.log(array[array.length - 1]);
console.log(array[array.length - 1][0]);
console.log(array[array.length - 1][1]);

const arrEstudiantes = array[array.length - 1];
console.log(arrEstudiantes[arrEstudiantes.length - 1]);

// Modificar un valor dentro de un array
array[0] = true;
array[1] = 'cadena';
array[2] = 50;
array[array.length - 1] = 'cualquier cosa';

console.log(array);

// Ciclos
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let count = 0;
while(count < 5) {
    console.log('desde while: ', count);
    count++;
}

// Iteración con arrays
// Podemos usar ciclos para acceder a cada elemento dentro de un array
// Ciclo for
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i}: ${element}`);
}

// Ciclo forEach -> built-in
array.forEach((element, index) => console.log(`${index}: ${element}`));

arrEstudiantes.forEach((element, index) => console.log(`${index}: ${element}`));

// Ciclo for of
for (const element of array) {
    console.log(element);
}


// Probemos algunos metodos (y propiedades) que por defecto tienen los arrays en js
const animals = ['tortuga', 'iguana', 'gato', 'gaviota', 'delfin', 'tiburon'];

// length -> Muestra la cantidad de elementos que hay en un array
console.log('length: ', animals.length);

// push -> Agrega uno o mas elementos al array (al final) y retorna el nuevo length
animals.push('hiena', 'bufalo');
console.log(animals);
console.log(animals.length);

// pop -> Elimina el ultimo elemento dentro de un array y lo retorna
const animalRemoved = animals.pop();
console.log(animals);
console.log(animalRemoved);
console.log(animals.length);

// shift -> Elimina el primer elemento dentro de un array y lo retorna
const animalRemovedWithShift = animals.shift();
console.log(animals);
console.log(animalRemovedWithShift);
console.log(animals.length);

// unshift -> Agrega uno o mas elementos al inicio del array y retorna la nueva longitud del array
animals.unshift('conejo', 'jirafa');
console.log(animals);
console.log(animals.length);

// split -> En realidad es un metodo de los strings pero convierte un string a un array
const palabra = 'oso';
const splittedArray = palabra.split('');
console.log(splittedArray);

// reverse -> Invierte el orden de los elementos de un array. El primer elemento pasa a ser el ultimo y vicerversa
const numbers = [1,2,3,4,5,6];
const reversedArray = numbers.reverse();
console.log(numbers);
console.log(reversedArray);

// join -> Une todos los elementos de un array en un string y retorna ese string
const reversedWord = splittedArray.reverse();
console.log('palabra invertida en forma de array: ', reversedWord);
const palabraInvertida = reversedWord.join('');
console.log(palabraInvertida);
console.log('es palindrome? ', palabraInvertida === palabra);


// RETO
// Partiendo de este array de frutas ['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango']
// 1. Cuales frutas tienen menos de 6 caracteres (length)
// 2. Cuales empiezan por la letra m (starsWith)
// 3. Cuales contienen la letra z (includes)
// El resultado en cada ejercicio debe ser un array con las frutas que pasaron las condiciones

const frutas = ['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango'];

// 1. Cuales frutas tienen menos de 6 caracteres (length)
const frutas1 = [];

for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    if (fruta.length <= 5) {
        frutas1.push(fruta);
    }
}

console.log(frutas1);

// 2. Cuales empiezan por la letra m (starsWith)
const frutas2 = [];

frutas.forEach(fruta => {
    if (fruta.startsWith('m')) {
        frutas2.push(fruta);
    }
});

console.log(frutas2);

// 3. Cuales contienen la letra z (includes)
const frutas3 = [];

for (const fruta of frutas) {
    if (fruta.includes('z')) {
        frutas3.push(fruta);
    }
}

console.log(frutas3);


// Comparación entre arrays (referencia vs valor)
// En arrays y objetos la comparación se hace por referencia y no por valor

// Comparacion en primitivos
const num1 = 1;
const num2 = 1;
console.log(num1 === num2);

// Comparacion en arrays
const arr1 = [1,7,8];
const arr2 = [1,7,8];
console.log(arr1 === arr2);

const arr3 = arr1; // arr3 -> arr1 -> [1,7,8]
console.log(arr1 === arr3);
arr3[0] = 2;
console.log(arr1);
console.log(arr3);