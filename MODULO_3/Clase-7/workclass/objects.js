// OBJETOS
// Los objetos en JavaScript son estructuras de datos que permiten almacenar datos y funcionalidades relacionadas.
// Comparados con otros tipos de datos como strings, números y booleanos, los objetos pueden contener múltiples valores y métodos.

// Sintaxis
const objeto = {
    propiedad1: 'valor1',
    propiedad2: true,
    propiedad3: false,
    edad: 18,
    animales: ['perro', 'gato'],
    saludar: () => console.log('Hello world'),
    objetoInterno: {
        a: 1,
        b: 'hola',
        c: {
            z: 55
        }
    }
};

console.log(objeto);


// La forma antigua de hacerlo
let persona = {};
console.log(persona);
persona.nombre = 'Juan';
persona.apellido = 'Perez';
persona.edad = 18;
persona.nacionalidad = 'Colombiana';
console.log(persona);

// Acceder a las propiedades: objeto.propiedad.?.?.?
console.log(objeto.edad);
console.log(objeto.animales);
console.log(objeto.objetoInterno.b);
console.log(objeto.objetoInterno.c.z);
objeto.saludar();
objeto.profesion = 'Programador';
console.log(objeto.profesion);
console.log(objeto);

// Eliminar una propiedad
delete objeto.edad;
console.log(objeto);


// Otras formas de crear objetos

// Object.create
const infoPersona = {
    nombre: 'Ana',
    apellido: 'Suarez',
    edad: 20,
    direccion: 'Calle 1',
    ciudad: 'Bogota'
};

const infoProfesion = Object.create(infoPersona);
console.log(infoProfesion);
console.log(infoProfesion.nombre);
console.log(infoProfesion.apellido);
infoProfesion.profesion = 'diseñadora';
infoProfesion.experiencia = 5;
infoProfesion.cargo = 'jefe';
console.log(infoProfesion);
console.log(infoProfesion.profesion);
console.log(infoProfesion.experiencia);
console.log(infoProfesion.cargo);


// Object.assign
const objeto1 = { a: 'cualquier cosa', b: 2 };
const objeto2 = { b: 3, c: 4 };
const objeto3 = { c: 5, d: 6 };

const resultadoObj = Object.assign({}, objeto1, objeto2, objeto3);
console.log(resultadoObj);
resultadoObj.w = 5;
console.log(resultadoObj);


// Object.freeze
const personFreeze = {
    nombre: 'Cesar',
    edad: 30,
    mascotas: ['tortuga', 'iguana']
};

Object.freeze(personFreeze);
// No tiene efecto porque congelé cualquier modificacion sobre el objeto (propiedades)
personFreeze.nombre = 'Pedro';
personFreeze.edad = 18;
personFreeze.direccion = 'Calle 1'; // Lo mismo aqui, no deja agregar nuevas propiedades
console.log(personFreeze);
// Sí se agrega porque no se modifica el valor de la variable como tal (no modifica la referencia en memoria)
// solo agrego un elemento mas
personFreeze.mascotas.push('gatico');
personFreeze.mascotas.pop();
personFreeze.mascotas = [];
console.log(personFreeze);


// Object.keys
console.log(Object.keys(personFreeze));
const keys = Object.keys(personFreeze);
for (let i = 0; i < keys.length; i++) {
    const element = keys[i];
    console.log(element);
}

console.log('-------------------');

// Object.values
console.log(Object.values(personFreeze));
const values = Object.values(personFreeze);
for (let i = 0; i < values.length; i++) {
    const element = values[i];
    console.log(element);
}

console.log('-------------------');

// Object.entries
console.log(Object.entries(personFreeze));
const entries = Object.entries(personFreeze);
for (let i = 0; i < entries.length; i++) {
    const element = entries[i];
    console.log(element);
}


// Referencia vs valor en objetos
const object1 = { a: 1, b: true };
const object2 = { a: 1, b: true };
console.log(object1 === object2);

const object3 = object1; // Comparten la misma referencia en memoria: object3 -> object1 -> { a: 1, b: true }
console.log(object1 === object3);
console.log(object2 === object3);


object3.a = 15;
console.log(object3);
console.log(object1);
console.log(object2);

// Como evito lo anterior?
const object4 = Object.create(object1);
object4.a = 45;
console.log(object4.a);
console.log(object1.a);