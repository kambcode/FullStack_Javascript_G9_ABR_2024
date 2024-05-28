// CICLOS, BUCLES O LOOPS (while y FOR)
// for(variable inicial; condicion; incrementro){que queremos que pase y se repita}

// ciclo: Un ciclo es algo repetitivo que se realiza en base a una condicion
// iteracion: La veces que el ciclo se repite

// Escriba un programa que calcule la suma de los primeros 10 numeros naturales(1,2,3...10) utilizando ciclos
// i = i + 1 -> i++
// i = i + 2 -> i += 2
// suma = suma + i -> suma += i

// SOLUCION WHILE
// var i = 1
// var suma = 0

// while( i <= 10){
//     suma += i;
//     i++
// }
// document.write(suma);


// SOLUCION FOR
// var suma = 0
// for(var i = 1; i <= 10; i++){
//     suma += i;
// }
// document.write(suma);

// REALIZAR UNA TABLA DE AMORTIZACION
// CICLO for

// var regularPayment = Number(prompt("Escriba el valor de la cuota"));
// var totalMonth = Number(prompt("Escriba la cantidad de meses que tiene el credito"));

// var totalPayment = 0;

// for(var month = 1; month <= totalMonth; month++){
//     totalPayment = totalPayment + regularPayment
//     document.write("<br>Mes, ", month, "cuota $"    , regularPayment, " Total abonado $", totalPayment)
// }
// document.write("<br> El pago total es de: ", totalPayment)
// ----------------------------------------------------------------------------------------
// CICLO while

var regularPayment = Number(prompt("Escriba el valor de la cuota"));
var totalMonth = Number(prompt("Escriba la cantidad de meses que tiene el credito"));

let totalPayment = 0;
let month = 1
while(month <= totalMonth){
    totalPayment = totalPayment + regularPayment
    document.write("<br>Mes, ", month, "cuota $"    , regularPayment, " Total abonado $", totalPayment)
    month++
}

document.write("<br> El pago total es de: ", totalPayment)

// CICLOS dentro de CICLOS
// Hacer la tabla del 5

// for(var i = 1; i <= 10; i++){
//     const tableResult = 5 * i
//     document.write("<br>5 * ", i, " = ", tableResult)
//     for(var j = 1; j <= 3; j++){
//         document.write("<br>Hola mundo")
//     }
// }







