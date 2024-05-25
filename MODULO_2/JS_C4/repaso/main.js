const number1 = Number(prompt("Digita el numero 1")); // 4
const number2 = Number(prompt("Digita el numero 2")); // 3
const operacion = prompt("Digita la operacion que deseas realizar (suma, resta, multiplicacion o divsion)"); //"suma"

if(operacion === "suma"){
    const suma = number1 + number2
    document.write("El resultado es: ", suma);
} else if(operacion === "resta"){
    const resta = number1 - number2
    document.write("El resultado es: ", resta);
} else if(operacion === "multiplicacion"){
    const multiplicacion = number1 * number2
    document.write("El resultado es: ", multiplicacion);
} else if(operacion === "division"){
    const division = number1 / number2
    document.write("El resultado es: ", division);
} else {
    document.write("la operacion que deseas hacer no estas disponible");
}

