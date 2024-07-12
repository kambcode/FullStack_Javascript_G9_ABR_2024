const estudiantes = [
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 17
    },
    {
        nombre: 'Catalina',
        apellido: 'jimenez',
        edad: 25
    },
    {
        nombre: 'Federico',
        apellido: 'Martinez',
        edad: 16
    },
];


/*estudiantes.forEach(estudiante => {
    if (estudiante.edad > 18) {
        console.log(estudiante);
    }
});*/

// RETO
// 1. Hacer el ejercicio anterior de estudiantes, con su propio forEach
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        callback(element);
    }
};

const obtenerMayoresEdadCallback = estudiante => {
    if (estudiante.edad > 18) {
        console.log(estudiante);
    }
};

const obtenerMenoresEdadCallback = estudiante => {
    if (estudiante.edad < 18) {
        console.log(estudiante);
    }
};

const mostrarLosQueElNombreEmpiecePorF = estudiante => {
    if (estudiante.nombre.startsWith('C')) {
        console.log(estudiante);
    }
};

myForEach(estudiantes, obtenerMayoresEdadCallback);
myForEach(estudiantes, obtenerMenoresEdadCallback);
myForEach(estudiantes, (estudiante) => console.log(estudiante));
myForEach(estudiantes, mostrarLosQueElNombreEmpiecePorF);


// 2. Doblar los numeros de un array
const numeros = [1,2,3,4,5,6,7,8,9,10];

const doubled = numeros.map(numero => numero * 2);
//console.log(doubled);

function myMap(array, callback) {
    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const result = callback(element);
        resultArray.push(result);
    }

    return resultArray;
}

const numerosMultiplicadosPorDos = myMap(numeros, numero => numero * 2);
console.log(numerosMultiplicadosPorDos);

const numerosMultiplicadosPorTres = myMap(numeros, numero => numero * 3);
console.log(numerosMultiplicadosPorTres);

const numerosMultiplicadosPorDiez = myMap(numeros, numero => numero * 10);
console.log(numerosMultiplicadosPorDiez);

const newObjectArray = myMap(numeros, numero => ({ numero }));
console.log(newObjectArray);

// 3. Hacer un programa que me simule el proceso de descargar un video.
// Hay que garantizar el orden de estos pasos:
// 1. Descargar el video: 2 segundos
// 2. Procesando video: 7 segundos
// 3. Video descargado: 0 segundos

// Declaración
const descargarVideo = (callback) => {
    setTimeout(() => {
        console.log('Descargando video...');
        callback();
    }, 2000);
}

const procesarVideo = (callback) => {
    setTimeout(() => {
        console.log('Procesando video...');
        callback();
    }, 7000);
}

const videoDescargado = () => console.log('Video descargado...');

// Ejecución
descargarVideo(() => {
    procesarVideo(() => {
        videoDescargado();
    });
});