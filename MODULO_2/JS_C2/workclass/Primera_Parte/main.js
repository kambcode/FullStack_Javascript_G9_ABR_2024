// Recuento de los visto en la primera clase y el uso de .toFixed()

//var age = prompt("Tu digita tu edad");
// document.write("<br>Tu edad es ", age);
// var middleAge = age / 3;
// document.write("<br>La mitad de la edad es ", middleAge.toFixed(2));

// COHERSIÓN DE DATOS

var fullName = "Daniel "+ "Cañon"
document.write("<br>Tu fullName es: ", fullName);
var year = "20" + "24" // -> 2024
document.write("<br>", year);

//-------------------------------------------------
// Internamente cuando yo escribo en un prompt, el me devuelve
// un String o Cadena de Texto

// "32"

// var userAge = Number(prompt("Escriba su edad")); // "32" -> 32
// document.write("<br>Su edad es: ", userAge)
// var userAgePlusTen = userAge + 10;
// document.write("<br>Su edad más 10 años es: ", userAgePlusTen)

// RETO 1

// Hacer un programa que les pida al usuario la edad y guardala en una var
// con este valor de la edad, vamos a calcular en que año el usuario nacio

// Ej: Edad 20
// Salida: Debe retornar el año 2004
// 2024 - edadUsuario

var edadUsuario = Number(prompt("Digita tu edad"));
document.write("<br>Tu edad es: ", edadUsuario);
var edadNacimiento = 2024 - edadUsuario
document.write("<br>Tu edad de nacimiento es: ", edadNacimiento);



