// CODIGO SINCRONO
// Una tarea sincrona es una tarea que tiene un tiempo de ejecucion especifico
// y que el lenguaje ejecutara inmediatamente no importa cuanto tarde, por lo
// que hará esperar a la siguiente linea del codigo hasta que la anterior linea
// se haya terminado de ejecutar.
// Tradicionalmente, JavaScript es single-threaded (de un solo hilo)
// thread(hilo --> proceso que la aplicacion puede usar para completar tareas)
// En JavaScript sincrono, las tareas se ejecutan en secuencia (1, 2, 3, 4, etc.)

// Ejemplo de JS sincrono
/*for (let i = 1; i <= 150000; i++) {
    console.log(i);
}

console.log('tarea 1');
console.log('tarea 2');*/


// CODIGO ASINCRONO
// Una tarea asincrona es una tarea que se va a ejecutar en el futuro
// bien sea con un tiempo establecido o no y que no sabemos con exactitud cuando va a terminar.
// JavaScript asincrono nos permite ejecutar tareas simultaneamente

/*setTimeout(() => {
    console.log('Ejecutando tarea 1...');
}, 5000);

console.log('Ejecutando tarea 2...');

setInterval(() => {
    console.log('Ejecutando tarea 3...');
    return;
}, 2000);*/

// Hay tres tecnicas para implementar JavaScript asincrono:
//1. callbacks
//2. promises
//3. async await

// Callbacks
// ¿Qué es una callback?
// Una callback es una función que se pasa como argumento a otra función y que se ejecuta después de que cierto proceso o tarea haya finalizado.
// Es como dejar un número de teléfono para que te llamen cuando algo esté listo.

// ¿Cómo se usa una callback?
// En JavaScript, las callbacks son comunes en situaciones donde se realiza una operación asíncrona, como cargar un archivo o realizar una solicitud a un servidor.
// En lugar de bloquear el código y esperar a que se complete la operación, se pasa una función callback que se ejecutará una vez que la operación haya terminado.
// Tambien se pueden usar en funciones de orden superior, que son funciones que pueden recibir como parametro una funcion y/o retornar dicha funcion


// Sync callbacks -> Se ejecutan inmediatamente (dentro de un proceso) y son bloqueantes
const alejandrosGreeting = () => console.log('Hola soy Alejandro');
const dumarsGreeting = () => console.log('Hola soy Dumar');
const harrysGreeting = () => console.log('Hola soy Harry');
const generalGreeting = (name) => console.log(`Hola soy ${name}`);

const showGreetings = (callback) => {
    callback();
};

// showGreetings('1'); -> Da error porque el argumento '1' no es una funcion si no un primitvo
showGreetings(alejandrosGreeting);
showGreetings(dumarsGreeting);
showGreetings(harrysGreeting);
showGreetings(function() { generalGreeting('Erick') });
showGreetings(() => generalGreeting('Arit'));


// Veamos como funciona el forEach por debajo
const animals = ['perro', 'gato'];
animals.forEach(animal => console.log(animal));

function myForEach(list, callback) {
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        callback(element);
    }
}

myForEach(animals, animal => console.log(animal));


// Async callbacks -> Se ejecutan cuando algo pasa (un evento ocurre)
const tarea1 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 1...');
        callback();
    }, 5000);
};

const tarea2 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 2...');
        callback();
    }, 2000);
};

const tarea3 = () => console.log('Ejecutando tarea 3...');

tarea1(() => {
    tarea2(() => {
        tarea3();
    });
});