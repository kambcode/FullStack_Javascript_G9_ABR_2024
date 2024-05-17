document.write("Hello World");

// Tipos de datos
// 1. String o Cadena de Texto
// - "Kambcode"
// - "Daniel Cañon"
// - 'Kambcode'
// - 'Daniel Cañon'

// 2. Numerico
// - 23
// - 30
// - 3.1416
// - 2024

// 3. Boleanos
// - True (verdad)
// - False (falso)

// Variables (var)
// Es la forma de almacenar un dato para modificarlo o presentarlo

var precio;
precio = 25.99

document.write("<br>El precio del articulo es: ", precio)

var costoEnvio = 10;
var iva = 4;

// Ejemplos String

var nombreProducto = "Nombre Original Auriculares para juegos con micrófono";

// Redeclarar Variables

nombreProducto = "Auriculares estéreo con cancelación de ruido"
document.write("<br>", nombreProducto);

// Operar Datos y Operar Variables
// 1. Suma (+)
// 2. Resta (-)
// 3. Multiplicacion (*)
// 4. Division (/)

var precioTotal = precio + costoEnvio
document.write("<br>El costo total del producto es: ", precioTotal)

var precioTotalX2 = precioTotal * 2
document.write("<br>El costo total del producto es: ", precioTotalX2)

// Reto:
// Dada 3 variables (precio, envio, iva), calcular el precioTotal del producto
// esto creando otra variable
var precio = 30000
var envio = 10000
var iva = 2000
var precioTotal = precio + envio + iva;
document.write("<br>El precio total es: ", precioTotal);

//alert("Esto es una alerta, dale aceptar");

//var nombreUsuario = prompt("Esto es una alerta, porfavor  digite su nombre");
//document.write("<br>El nombre que digitaste es: ", nombreUsuario);


// Tarea
var nombreCompleto = prompt("Digita tu nombre");
var alturaCm = prompt("Digita tu altura en cm");
var alturaM = alturaCm / 100
document.write("<br>", alturaM);





