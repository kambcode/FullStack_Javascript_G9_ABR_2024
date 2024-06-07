// Arrow Function o Funciones Flechas

//----------- Funcion Tradicional ---------------------
function sayHello (){
    console.log("Hola soy una Funcion Tradicional")
    }

sayHello();

// ----------- Funcion Flecha ---------------------------

const sayHello2 = () => {
    console.log("Hola soy una Funcion Flecha")
}

sayHello2();

// Una funcion que nos diga si una persona es mayor de edad (edad > 18)

// function isAdult (age){
//     const result = age > 18 // false -> const result = false
//     return result // return true
// }


// const personIsAdult = isAdult(20); // const personIsAdult = true
// console.log("Esta persona es mayor de 18 años?", personIsAdult);


// Con funciones tipo flecha

const isAdult = (age) => {
    const result = age > 18 // false -> const result = false
    return result // return true
}

const personIsAdult = isAdult(15); // const personIsAdult = true
console.log("Esta persona es mayor de 18 años?", personIsAdult);


/// RETO 
// Crear una Funcion Flecha, que calcule el valor de un producto + el envio
// - precio
// - envio