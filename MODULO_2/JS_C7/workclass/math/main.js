// La libreria de matematicas de JS es Math



// 1. Math.random() -> Generar numeros aleatorios
// console.log("tu numero aleatorio es ", Math.random()) // -> Generar numeros aleatorios entre 0 y 1

// Math.random() * 10 -> Genera numero aleatorio entre 0 y 10
// console.log("tu numero aleatorio es ", Math.random() * 10)

// Math.random() * 10 -> Genera numero aleatorio entre 0 y 100
// console.log("tu numero aleatorio es ", Math.random() * 100)


// const aleatorio = Math.random() * 10
// console.log("tu numero aleatorio es ", aleatorio);

// 2. Math.round() -> Redondear un numero
const aleatorio = Math.random() * 10
console.log("Mi numero aleatorio es: ", Math.round(aleatorio))

// Generar numeros entre intervalos Math.random() * (max - min) + min
// const aleatorio2 = Math.random() * (20 - 10) + 10
// console.log("Mi numero aleatorio es: ", Math.round(aleatorio2));