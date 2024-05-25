// Hay 2 formas de crear ciclos/bucles/loops en JS (while && for)
// Un ciclo es algo que se repite hasta que nosotros queramos
// Ciclo While
// 1. Es una variable de inicio
// 2. Condicion dentro de los parentesis ()
// 3. Dentro de sus llaves, lo que queremos hacer si se cumple la condicion
// 4. Colocar un incremento

// var userPassword = prompt("Digita tu contraseña");

// while(userPassword != "kambcode"){
//     console.log("Acceso Denegado")
//     userPassword = prompt("Digita tu contraseña es incorrecta, intenta de nuevo")   
// }

// document.write("BIENVENIDO A TU PAGINA")


// EJERCICIO = Hacer un programa que imprimi los numeros del 1 al 100
// Iteracion= Son las veces que se repite el ciclo
// var number = 1

// while(number <= 1000){
//     document.write(number, "<br>")
//     number = number + 1;
// }

// document.write("FIN DEL PROGRAMA")

// RETO
// 1. Hacer un prorgrama que cuente de 2 en 2 hasta 50
// 2. hacer lo mismo de forma decendente



// var numero2 = 50;

// while(numero2 >= 0){
//     document.write(numero2, "<br>")
//     numero2 = numero2 - 2;
// }


// var numero = 2;

// while(numero <= 50){
//     document.write(numero, "<br>")
//     numero = numero + 2;
// }

// for(inicio; condicion; incremento){
    // }

// for(var numero = 2; numero <= 50; numero = numero + 2){
//     document.write(numero, "<br>")
// }

// Programa que imprima del 1 al 1000

// for(var num = 1; num <= 1000; num = num + 1){
//     document.write("<br>", num)
// }

// Programa que imprima la tabla del 7
for(var multiplo = 1; multiplo <= 10; multiplo = multiplo + 1){
    const tableResult = multiplo * 7
    document.write("<br>La multiplicacion de 7 * ", multiplo, " es: ", tableResult);
}



// var multiplo = 1

// while(multiplo <= 10){
//     const tableResult = multiplo * 7
//     document.write("<br>La multiplicacion de 7 * ", multiplo, " es: ", tableResult);
//     multiplo = multiplo + 1
// }
