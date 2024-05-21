// Explicación 

// == -> Compara los valores sin tner en cuenta los tipos -> 5 == "5" -> True
// === -> Los valores son iguales pero los tipos son diferentes -> 5 === "5" False
var password = "Kambcode"

//document.write("<br>", 5 == "5");
// document.write("<br>", 5 === "5")
// document.write("<br>", password == "kambcode") 
// document.write("<br>", password === "kambcode") 

// != -> == (Diferencia)
// !== -> === (Diferencia exacta)
//document.write("<br>", 5 != "5"); // False 
// document.write("<br>", 5 !== "5") // True

// % -> Modulo

// var number = Number(prompt("Digita un número"));

// if(number >= 0){
//     document.write("Tu número es positivo")
// } else{
//     document.write("Tu número es negativo")
// }

// Hacer un programa que le diga a él usuario si su número es par o impar Utilizando el Modulo %
//var num = Number(prompt("Digita un número"));

// if(num % 2 === 0){
//     document.write("Tu número es par")
// } else {
//     document.write("Tu número es impar")
// }

// Una variable es la forma de almacenar un dato para modificarlo, utilizar o presentarlo
// Podemos renombrarlas o reescribirlas
// var nombre = prompt("Digita tu nombre");
// document.write("Tu nombre es: ", nombre);

// const nombre = "kambcode"; // Renombrar
// document.write("Tu nombre es: ", nombre);

// nombre = 12; // Reescribir
// document.write("Tu nombre es: ", nombre);

// Constantes const
// Una constante es la forma de almacenar un datos, utilizarlo o presentarlo
// No podemos Renombrar ni Reescribir
//const age = prompt("Digita tu edad");
const usuario = "Kambcode";
document.write("<br> tu primer usuario es: ",usuario)
document.write("<br> tu segundo usuario es: ",usuario)
document.write("<br>", usuario);
const number = 12;
const boleano = true;

// Uso del console.log("")
//const usuario2 = prompt("Digita una contraseña")
const peso = 70;
const altura = 1.74;
const imc = peso / (altura * altura)
//document.write("<br>Tu imc es: ", imc);
console.log("Tu imc es: ", imc);
//console.log("La contraseña que guardo el usuario es: ", usuario2);

// Var vs Const
// Una variable me consume más recursos que una constante

var age = Number(prompt("Digita tu edad")); // 28
document.write("<br>Tu edad es: ", age); // 

// Vamos a calcular la edad del usuario en 10 años
age = age + 10;
document.write("<br>Tu edad dentro de 10 años es: ", age);

