// FUNCIONES
// ¿Qué es una función?
// Una función en JavaScript es un bloque de código que realiza una tarea específica.
// Puedes pensar en ella como una especie de máquina que toma algo (entradas), hace algo con eso, y luego produce un resultado (salida) o no.

// ¿Por qué usar funciones?
// Las funciones nos permiten escribir código reutilizable y modular.
// En lugar de escribir el mismo código una y otra vez, podemos definir una función que realice esa tarea y simplemente llamar a esa función cuando la necesitemos.

// Sintaxis básica:
// Para definir una función en JavaScript, usamos la palabra clave function, seguida del nombre de la función y paréntesis (), donde opcionalmente podemos especificar 
// los parámetros de entrada y de salida. Después, viene un bloque de código encerrado entre llaves {} que contiene las instrucciones que queremos que la función realice.

function nombreDeLaFuncion() {
    console.log('Hello world!');
}

// funcion con parametros
function nombreDeLaFuncionConParams(parametro1, parametro2) {
    console.log(parametro1);
    console.log(parametro2);
}

// LLamar a una función
// Una vez que hemos definido una función, podemos llamarla o invocarla en cualquier parte de nuestro código
// simplemente escribiendo su nombre seguido de los parentesis ()
nombreDeLaFuncion();

const numero = 1;
nombreDeLaFuncionConParams(1, 'Hola');
nombreDeLaFuncionConParams(2, 'Hello');

// Parámetros y argumentos:
// Los parámetros son variables que se utilizan en la definición de la función para representar los valores que se pasan a la función cuando se llama.
// Los argumentos son los valores reales que se pasan a la función cuando se llama.

// Valor de retorno
// Las funciones pueden devolver un valor utilizando la palabra clave return.
// Esto es útil cuando queremos que nuestra función produzca algún resultado que podamos usar más tarde en nuestro programa.
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

const resultado = multiplicar(10, 12);
const resultado2 = multiplicar(107, 1042542);
console.log(resultado);
console.log(resultado2);

// RETO
// Mostrar el nombre y la edad de una persona usando una funcion. Si la persona es mayor de edad debe decir que
// es mayor de edad y si no menor de edad.
function verificarMayoriaEdad(nombre,edad) {
    if (edad >= 18) {
        return `${nombre} es mayor de edad. Tiene ${edad} años.`;
    }

    return `${nombre} es menor de edad. Tiene ${edad} años.`;
}
  
console.log(verificarMayoriaEdad("Juan",17));
const result = verificarMayoriaEdad("Ana",10);
console.log(result);
console.log(verificarMayoriaEdad("Julieta",25));


// Arrow functions
// Son funciones declaradas con una sintaxis mas practica para evitar escribir codigo de mas.
// Necesita ser guardada en una variable para poder ser ejecutada.
function dividirTradicional(numero1, numero2) {
    return numero1 / numero2;
}

const dividir = (numero1, numero2) => numero1 / numero2;
const reusltadoDivision = dividir(107, 102);
console.log(reusltadoDivision);

const mostrarObjeto = (palabra1, palabra2) => ({
    palabra1: palabra1,
    palabra2
});

const objetoFinal = mostrarObjeto('hola', 'mundo');
console.log(objetoFinal);
console.log(objetoFinal.palabra1);
console.log(objetoFinal.palabra2);


// Funciones anónimas y expresiones de función:
// Además de las funciones con nombre que acabamos de ver, también puedes crear funciones anónimas (sin nombre).
// Las funciones anónimas deben guardarse en memoria para poder ser ejecutadas ya que no tienen un nombre o identificador definido. 
// Como la creación de una función ocurre en el contexto de una expresión de asignación, (el lado derecho de =), esto es una Expresión de función.
// Si queremos ejecutar una funcion anónima sin guardarla en memoria debemos usar las IIFE (sigla en inglés).

// Funcion anonima sin retorno
const saludar = function() {
    console.log('hola')
};

saludar();

// funcion anonima con retorno
const sumar = function(num1, num2) {
    return num1 + num2;
}

console.log(sumar(1,4));

// Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
(function() {
    console.log('Saludos');
})();

() => console.log('Saludando desde arrow function...')();

// IIFE con retorno
let saludos = function() {
    return 'Saludos';
}();

console.log(saludos);

let saludos2 = (() => 'Saludos 2')();
console.log(saludos2);
