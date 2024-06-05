// HTML y CSS: W3school
// JavaScript: ECMAScript

// Funciones en JS
//"Una funcion en JavaScript es un bloque de codigo reutilizable, que recibe una tarea
// especifica (function)"
// function Nombre (Parametros o Argumentos){
// Lo que quiero que pase
// }

// const person1 = "Daniel";
// const person1Age = 30;
// const bithDate = 2024 - person1Age;
// console.log("Hola", person1, "naciste en: ", bithDate);

// const person2 = "Juan";
// const person2Age = 27;
// const bithDate2 = 2024 - person2Age;
// console.log("Hola", person2, "naciste en: ", bithDate2);

// const person3 = "Pepito";
// const person3Age = 45;
// const bithDate3 = 2024 - person3Age;
// console.log("Hola", person3, "naciste en: ", bithDate3)


// function calcularFechaDeNacimiento (age){
//     const birtDate = 2024 - age;
//     console.log("Funcion: Hola naciste en: ", birtDate);
// }

// calcularFechaDeNacimiento(10);
// const person2 = "Juan";
// const person2Age = 27;
// calcularFechaDeNacimiento(person2Age);
// const person3 = "Pepito";
// const person3Age = 45;
// calcularFechaDeNacimiento(person3Age);


// RETO:
// const persona1 = "Pablo";
// const persona2 = "Jorge";
// const persona3 = "Mauricio";
// const persona4 = "Isabel";

// Escribe una funcion que reciba un nombre y que salude a la persona
// Ejm. console.log("Hola", personName)

// function sayHello (name){
//     console.log("Hola", name)
// }

// sayHello("Juan") // "Hola Juan"
// sayHello(persona1) // Hola Pablo
// sayHello("Pablo") // Hola Pablo
// sayHello(persona2) // Hola Jorge
// sayHello(persona3) // Hola Mauricio
// sayHello(persona4) // Hola Isabel

// --------------------------------------------------------
// vamos a crear una funcion que calcule el IMC
// imc = peso / (alturaM * alturaM)

// NOTA: Las variables o constantes dentro de una funcion solo existen dentro de ellas,
// no se puede usar afuera de ellas


// Return: En una funcion se utiliza el return para devolver un valor desde la funcion
// al lugar donde fue llamada.

// function calcIMC (peso, altura){
//     const result = peso / (altura * altura);
//     return result
// }

// var imc = calcIMC(30, 1.78) // 9.48
// console.log("Esto es gracias al return", imc);

// if(imc < 10){
//     console.log("El IMC es menor a 10")
// } else {
//     console.log("El IMC es mayor a 10")
// }


// RETO 2 es:
// crear una funcion que calcule el valor de un producto + el envio
// function calcPrecioTotal (precioProducto, precioEnvio){
// la funcion debe retornar precioProducto + precioEnvio
// }

function calcPrecioTotal (producto, envio){
    const total = producto + envio
    return total
}

const valor = calcPrecioTotal(18000, 1000)
console.log("El precio total es: ", valor);

// Una condicion que me diga que si el precioTotal es más de 15.000, me diga que es costoso

if(valor >= 15000){
    console.log("El producto es costoso")
}




























