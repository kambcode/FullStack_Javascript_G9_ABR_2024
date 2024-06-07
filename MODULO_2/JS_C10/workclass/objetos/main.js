// QUE SON LOS OBJETOS EN JS

// Tipos de Datos
// 1. String o Cadenas de texto
// 2. Numericos
// 3. Boleanos -> True || False
// 4. Funciones 
        // function sayHello (){
        //     console.log("Hola soy una Funcion Tradicional")
        // }

        // sayHello();
// 5. Arreglos || listas || Arrays = []
// 6. Object {}

// ¿Que son los Objetos?
// Los objetos es una coleccion de propiedades y/o funcionalidades

// Crea un objeto de un perro

// const dog = {
//         name: "firulais",
//         age: 5,
//         color: "negro",
//         esDeRaza: true
// }

// console.log("Este es el objeto perro", dog);
// console.log("Esta es la edad del perro", dog.age)




// const product = {
//         name: "celular",
//         marca: "Iphone",
//         color: ["negro", "rosado", "blanco", "plateado"],
//         cantidadDisponible: 150,
//         precio: 5000000,
//         descuento: 10, // 10%
//         disponibleEntregaInmediata: true
// }

// console.log("Cual es la marca del celular?", product.marca)

// Reto: Si el producto esta disponible para entrega inmediata
// vamos a imprimir "Lo recibiras hoy"
// si no, vamos a imprimir "Lo recibiras despues"

// if(product.disponibleEntregaInmediata){
//         console.log("Lo recibiras hoy")
// } else {
//         console.log("Lo recibiras despues")
// }


// const product = {
//         name: "celular",
//         marca: "Iphone",
//         color: ["negro", "rosado", "blanco", "plateado"],
//         cantidadDisponible: 150,
//         precio: 5000000,
//         descuento: 10, // 10%
//         disponibleEntregaInmediata: true
// }

// Operaciones con los objetos
// 1. Puedo sobreescribir una propiedad
// product.marca = "Xiaomi";
// 2. Puedo agregar una propiedad
// product.sePuedeFinanciar = false;
// 3 Puedo quitar una propiedades
// delete product.descuento




// const dog = {
//         name: "firulais",
//         age: 5,
//         color: "negro",
//         esDeRaza: true,
//         estaVacunado: true,
//         saludar: () => {
//                 console.log("Hola soy Firulais")
//         }
// }

// console.log("Este es el objeto perro", dog);
// console.log("Esta es la edad del perro", dog.age)

// dog.saludar();


const product = {
        name: "celular",
        id: 1223,
        marca: "Iphone",
        color: ["negro", "rosado", "blanco", "plateado"],
        cantidadDisponible: 150,
        precio: 5000000,
        descuento: 1500000, // 10%
        disponibleEntregaInmediata: true,
        obtenerPrecioTotal: () => {
                const precioTotal = product.precio - product.descuento
                return precioTotal
        },
        estaDisponibleEnColor: (colorSolicitado) => {
                const colorDisponible = product.color.includes(colorSolicitado) // true
                return colorDisponible // true
        }

}

// const precioFinal = product.obtenerPrecioTotal();
// console.log("El precio total del producto es: ", precioFinal)

const colorEnviado = product.estaDisponibleEnColor("blanco") // true
console.log("Esta disponible en color blanco?", colorEnviado)