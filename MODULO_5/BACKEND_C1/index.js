const numeros = [3, 5, 8, 10, 2, 4, 7]

const nuevosNumeros = numeros.map((numero) => {
    if(numero % 2 === 0) return numero * 2
    return numero * 3
})
console.log(nuevosNumeros)

// const numeros = [2, 5, 7, 1, 3, 4];

// const nuevoArray = numeros.map((numero) => numero * 2 )

// console.log(nuevoArray)



// const nuevoArray = []
// for(let numero of numeros){
//     nuevoArray.push(numero * 2)
// }
// console.log(nuevoArray)


// let miArray = ['U','N','I','V','E','R','S','O']



// for (let index = 0; index < miArray.length; ++){
//     console.log(miArray[index])
// }

// let posicion = 0
// while (posicion < miArray.length){
//     console.log(miArray[posicion])
//     posicion+=1
// }





// const objeto = new Object()
// objeto.nombre = 'arroz'
// console.log(objeto)
// objeto.precio = 1600
// objeto.inventario = 10
// console.log(objeto)

// const objeto = {
//     nombre: 'arroz',
//     precio: 1600,
//     inventario: 10,
// }

// console.log(objeto.nombre)

// const objetosOficina = ['computadora', 'silla', 'escritorio']

// console.log(objetosOficina)

// objetosOficina.push('papelera')

// console.log(objetosOficina)

// objetosOficina.pop()
// console.log(objetosOficina)

// const objeto = objetosOficina.some((objetoOficina) => objetoOficina === 'silla')
// console.log("ultimo log: ", objeto)
// if(objeto) {
//     console.log('Si existe la silla')
// }

// const animal = 'gato';

// switch (animal) {
//     case 'pollo':
//         console.log('El animal es un pollo');
//         break;
//     case 'perro': 
//         console.log('El animal es un perro');
//         break;
//     default:
//         console.log('No encontramos tu animal');
// }

// if(animal === 'pollo') {
//     console.log('El animal es un pollo');
// } else if(animal === 'perro') {
//     console.log('El animal es un perro');
// }else {
//     console.log('No encontramos tu animal');
// }

// if(animal === 'pollo') console.log('El animal es un pollo')
// else if(animal === 'perro') console.log('El animal es un perro')
// else console.log('No encontramos tu animal')

// const ternario = animal === 'pollo' ? 'el animal es un pollo' : animal === 'perro' ? 'el animal es un perro' : 'No encontramos tu animal';