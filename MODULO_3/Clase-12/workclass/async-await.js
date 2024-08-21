// Async/await es una característica introducida en ECMAScript 2017 (también conocido como ES8) que simplifica el trabajo con funciones asíncronas y promesas en JavaScript.
// Esta característica permite escribir código asíncrono de manera más legible y mantenible, especialmente cuando se trabaja con múltiples operaciones asíncronas.

/*
La sintaxis de async/await se compone de dos palabras clave principales: async y await.

async: Se utiliza para declarar que una función devuelve una promesa. Dentro de una función async, podemos utilizar la palabra clave await para esperar a que se resuelva una promesa.
await: Se utiliza para pausar la ejecución de una función async hasta que una promesa se resuelva. Esto permite que el código asíncrono se comporte de manera más similar al código síncrono.
*/

// Como usar async await

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/100');
        const posts = await response.json();
        console.log(posts);
    } catch(error) {
        console.log(error);
    }
}

//getPosts();


// RETO: Hacer un programa que le ayude a una madre saber si su hijo se portara bien y si obtendra buenas calificaciones
// Si se porta bien y obtiene buenas calificaciones entonces le compran un telefono
// Si se porta mal u obtiene malas calificaciones lo castigan

let comportamiento = true;
let calificaciones = false;

const verificarComportamiento = new Promise((resolve, reject) => {
    if (comportamiento) {
        resolve(true);
    } else {
        //reject('Te portaste muy mal');
    }
});

const verificarCalificaciones = new Promise((resolve, reject) => {
    if (calificaciones) {
        resolve(true);
    } else {
        //reject('Te falto estudiar mas');
    }
});

async function recompenza() {
    try {
        // Solucion bloqueante
        //const respComportamiento = await verificarComportamiento;
        //const respCalificaciones = await verificarCalificaciones;
        //console.log(respComportamiento);
        //console.log(respCalificaciones);
        

        //Solucion no bloqueante
        const [ respComportamiento, respCalificaciones ] = await Promise.all([ verificarComportamiento, verificarCalificaciones ]);

        if (respComportamiento && respCalificaciones) {
            console.log('Te comprare un telefono')
        }
    } catch(error) {
      console.log('Error: ', error);
    }
}

//recompenza();


// Callbacks vs Promises vs async/await

// Callbacks
const tarea1 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 1...');
        callback();
    }, 3000);
};

const tarea2 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 2...');
        callback();
    }, 2000);
};

const tarea3 = (callback) => {
    setTimeout(() => {
        console.log('Ejecutando tarea 3...');
        callback();
    }, 1000);
};

const tarea4 = () => console.log('Ejecutando tarea 4...');

/*tarea1(() => {
    tarea2(() => {
        tarea3(() => {
            tarea4();
        });
    })
});*/


// Promises (then y catch)
function generatePromise(number, milliseconds) {
    return new Promise((resolve) => {
        if (milliseconds > 0) {
            setTimeout(() => {
                resolve(`Task ${number}...`);
            }, milliseconds);
        } else {
            resolve(`Task ${number}...`);
        }
    });
}

const promesaTarea1 = generatePromise(1, 5000);
const promesaTarea2 = generatePromise(2, 800);
const promesaTarea3 = generatePromise(3, 1000);
const promesaTarea4 = generatePromise(4, 350);

/*promesaTarea1
    .then(res => {
        console.log(res);
        return promesaTarea2;
    })
    .then(res => {
        console.log(res)
        return promesaTarea3;
    })
    .then(res => {
        console.log(res);
        return promesaTarea4;
    })
    .then(res => console.log(res));*/


/*const resultadoPromesas = Promise.all([promesaTarea1, promesaTarea2, promesaTarea3, promesaTarea4])
    .then(res => console.log(res))
    .catch(err => console.log(err));*/


// async / await
const task1 = () => generatePromise(1, 5000);
const task2 = generatePromise(2, 800);
const task3 = () => generatePromise(3, 1000);
const task4 = generatePromise(4, 350);

async function executeTasks() {
    /* Solucion bloqueante
    const resp1 = await task1();
    console.log(resp1);
    const resp2 = await task2;
    console.log(resp2);
    const resp3 = await task3();
    console.log(resp3);
    const resp4 = await task4;
    console.log(resp4);*/

    // Solucion no bloqueante
    const resultadoPromesas = await Promise.all([ task1(), task2, task3(), task4 ]);
    console.log(resultadoPromesas);
}

executeTasks();