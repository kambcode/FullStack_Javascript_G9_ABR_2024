# Funciones

En Javascript podemos generar funciones las cuales nos sirven para reutilizar código de manera que tengamos un flujo de trabajo mucho mas entendible y organizado, cuya importancia la miraremos en otros modulos cuando hablemos de buenas practicas para mantenibilidad y escalabilidad de código.

Miremos un ejemplo donde tenemos una aplicación de salud en la cual queremos calcular el IMC de los clientes para evaluar si están en un peso sano o no, es una funcionalidad que por supuesto se ejecutará muchas veces durante el uso de la aplicación de un cliente debido a que es el fin de nuestra app monitorear temas de salud como el IMC, por ejemplo, si el cliente cambia el registro de peso que se tiene, debemos hacer el calculo nuevamente con el nuevo peso de manera de indicarle si se encuentra demasiado bajo de peso, con un peso bueno para su salud o con sobrepeso, por tanto esta formula del IMC la podríamos aplicar cada vez que la necesitemos sin problema, pero se presta para desorden o por ejemplo podría pasarnos que en alguna implementación metamos la pata y copiemos mal la formula, en los demás lugares donde se use trabajará bien pero en ese lugar donde no lo hicimos bien va a fallar, la solución es que podríamos encapsular ese calculo en una función como la siguiente:

```
//El IMC se calcula como el peso sobre el cuadrado de la estatura
function calcularIMC(peso, estatura) {
  return (peso / (estatura * estatura))
}
```

De la misma manera que lo haría una función matematica, definimos que tenemos una función llamada `calcularIMC` la cual recibe como `parametro` el peso y la estatura de una persona y nos devuelve su IMC, luego entramos mas a detalle con las funciones, por ahora lo que nos interesa es el contenido de la función o su `scope`, es que cuando definimos una función y sus parametros luego tenemos que indicar que va a hacer esa función, esta funcionalidad la debemos encerrar dentro de esos corchetes curveados `{ aquí }` y ese será entonces el `scope` de la función. En Javascript existen muchos objetos distintos que generan `scopes` pero el principal son las funciones, mirémoslo con otro ejemplo.

```
let nuevaVariable = 45

function saludar() {
  //Esto está dentro del scope de la función saludar
  let saludo = "Hola, como estas"
  console.log(saludo)
  //Hasta aquí llega el scope de la función saludar
}
//Esto ya es afuera del scope la función saludar, es decir, no hace parte de su scope
const variableConstante = false
console.log(saludo) //Esto genera error porque saludo no existe por fuera de la función saludar
```

Así entonces, `saludo` es una función que solo existe dentro del contexto o `scope` de `saludar()` por lo tanto solo puede ser accedida dentro de saludar, por lo que la ultima linea genera error.

Luego, lo que no esté dentro del scope de `saludar()` ni de ningun otro scope, es decir, este por fuera de todo, es de scope global, en este caso por ejemplo, la variable `nuevaVariable` podría ser accedida desde dentro de `saludar() o de donde se necesite`.

Esto es lo que tenemos que tener claro por ahora, continuemos.

Miremos nuevamente el ejercicio inicial.

```
function miFuncion() {
        let hola = "hola";
}
console.log(hola); // error: hola is not defined
```

Al ejecutar el código anterior nos arrojará error, porque la variable `hola` está definida dentro del contexto de la función `miFuncion` entonces esta existe dentro de la función, pero al intentar acceder a ella por fuera de este contexto nuestro interprete no reconoce la variable por lo que al ejecutar nuestro script este arrojará error.

Para las definición de objetos existen dos tipos de scopes, el scope **_bloque_** o **_local_** y el **_global_**, según sean definidas las variables, es decir, según el keyword utilizado para declarar la variable esta tiene un scope, las variables definidas con la palabra clave `var` tienen un scope global, es decir, una variable definida por fuera de una función o algún bloque de código con `var` tendrá accesibilidad desde cualquier porción de nuestro código, cuando la usamos dentro de bloques o funciones esta tendrá un scope en bloque como lo vimos en el ejemplo anterior. Por ejemplo, en el siguiente ejemplo nuestro código funcionará correctamente por el lugar donde fue definida nuestra variable

```
var saludo= "hey hi";
function nuevaFuncion() {
    var hola= "hello";
}
console.log(saludo)
```

Hasta aquí todo bien, el problema con usar `var` es que nuestras variables pueden ser redefinidas a lo largo de nuestro código, esto se refiere a que algo como el siguiente ejemplo, no generará error:

```
var saludo= "Hey hola";
var saludo= "Buenos días";
```

Lo que generará que podamos incurrir en redefiniciones de variables que causen que nuestro código no funcione de la manera esperada en códigos extensos.

Desde el 2015, en la versión 6 de ECMAScript se introdujo la palabra clave `let` a Javascript, la cual fue implementada con el fin de mitigar este riesgo anteriormente mencionado, así entonces, esta keyword nos permite definir una variable local, de la misma manera que las definidas con `var` dentro de un bloque, pero, adicionalmente no nos permite redefinir nuestras variables, en este caso si genera error lo que nos quita esa posibilidad de error. Cabe aclarar que si se intenta redefinir dentro de un scope distinto si funcionará. Ejemplo:

```
let saludo= "Buenos días";
let saludo = "Buenas tardes"; // error: Identifier 'saludo' has already been declared
```

Pero, si funciona si lo hacemos de la siguiente manera:

```
let saludo = "Buenos días";
let hour = 1300;
if (hour > 1200) {
    let saludo = "Buenas tardes";
    console.log(saludo); // "Buenas tardes"
}
console.log(saludo); // "Buenos días"
```

Al no funcionar la redefinición con la palabra clave `let` no podemos redefinir nuestras variables, esto nos ahorra dolores de cabeza en códigos extensos.

Finalmente nuestras variables `const` funcionan con un scope en bloque al igual que las `let`, es decir, existen dentro del contexto donde fueron definidas ya sea una función o un objeto, pero si intentamos acceder por fuera de su scope obtendremos un error pues esta no existe.

## Funciones

Retomemos el tema ahora que iniciamos antes, funciones.

Las funciones en los lenguajes de programación funcionan igual que cualquier función matematica que conocemos, es un conjunto de reglas definidas que con unas entradas tiene unas salidas.

A estas entradas en el mundo del desarrollo se les llama `parametros` o `argumentos` y son un elemento principal de las funciones el cual nos permite obtener un comportamiento distinto con base a estos parametros de entrada. Miremos un ejemplo.

```
function sumarNumeros(a, b) {
	return a + b
}

const suma = sumarNumeros(2, 3);
console.log(suma) // 5
```

En el ejemplo anterior tenemos una función llamada sumar numeros, la cual recibe por parametros a y b, los suma y devuelve el resultado, como vemos al llamar la función con los parametros 2 y 3 nos devuelve el valor de 5.

Este es el funcionamiento basico de las funciones, las usamos principalmente para encapsular procesos que hacemos en repetidas ocasiones a lo largo de nuestro código y evitarnos estar duplicando lineas de código y por supuesto también por orden pues hay ocasiones en las que ejecutamos una serie de procesos con un fin el cual en nuestro flujo del código quedaría muy dificil de visualizar, por lo que mejor hacemos un llamado a una función dentro de la cual encapsulamos dicha funcionalidad, miremos un ejemplo sencillo.

```
//Se quiere calcular el cubo de la variable número;
const numero = 2;
const numeroAlCuadrado = numero * numero;
const numeroAlCubo = numeroAlCuadrado * numero;
console.log(numeroAlCubo) // 8

//Usando operadores de asignación
let numero = 3;
numero *= 3;
numero *= 3;
console.log(numero) //27
```

Como vemos son dos posibles soluciones, por supuesto podríamos simplificarlo haciendo uso del modulo Math, pero para casos del ejercicio lo haremos así.

Puede ser un poco molesto de visualizar esa multiplicación para obtener el cubo del número, entonces, encapsulemos esa funcionalidad.

```
const numero = 4;

function calcularCubo(numero){
  const numeroAlCuadrado = numero * numero;
  const numeroAlCubo = numeroAlCuadrado * numero;
  return numeroAlCubo;
}

console.log(calcularCubo(numero)) //64
```

De esta manera siempre podemos reutilizar la funcionalidad sin tener que ver esas 3 lineas en el flujo de nuestro código que dificultan tanto su lectura.

Luego, para definir nuestras funciones Javascript pone a disposición distintas maneras de hacerlo, esto con el fin de adaptarse a las distintas necesidades de los desarrolladores, mas adelante iremos viendo cuales son estas necesidades y como nos ayudan las distintas maneras de definir funciones, miremos entonces, como definimos las funciones.

Existen 3 diferentes maneras de definir funciones en Javascript, estas se usan según nuestra necesidad, por ejemplo para el tema de **_callbacks_** que necesitamos pasar funciones como parametros de funciones usar funciones como variables resulta bastante atractivo, o para cuando utilizamos **_nameless_** functions que son funciones sin nombre también, estos son usos que miraremos mas adelante, por ahora veamos como declararlas.

### Por declaración

Las llamamos por declaración cuando usamos la estructura basica, la palabra clave, los parametros y el bloque de código:

```
function multiplicar(primerNumero, segundoNumero) {
  return primerNumero * segundoNumero;
}

console.log(multiplicar(5, 6)); // 30
```

De esta manera nuestras funciones tienen hoisting, es decir, son cargadas de primeras por nuestro interprete por lo que podemos usarlas antes de definirlas, esto es muy importante porque podemos para temas de orden definir nuestras funciones hasta el final del código y luego utilizarlas en el inicio, mas alla de esto, es importante tener claro el concepto del hoisting y cuando se aplica y cuando no para entender en caso de comportamientos indeseados de nuestro código que podría estar pasando.

### Por expresión

Las llamamos por expresión cuando definimos nuestra función como una variable, igualmente se utiliza la palabra clave function, los parametros y el bloque

```
const multiplicar = function(primerNumero, segundoNumero) {
  return primerNumero * segundoNumero;
}

console.log(multiplicar(5, 6)); // 30
```

De esta manera nuestras funciones **_NO_** tienen hoisting, es decir, no son cargadas de primeras por nuestro interprete por lo que al intentar usarlas antes de su definición nos generará errores.

### Arrow Functions

Las arrow functions o funciones de flecha son la manera corta de definir funciones por expresión, nos sirve mucho cuando usamos **_callbacks_** que es un concepto un poco mas avanzado que miraremos mas adelante.

```
const multiplicar = (primerNumero, segundoNumero) => {
  return primerNumero * segundoNumero;
}

console.log(multiplicar(5, 6)); // 30
```

Cuando una arrow function no tiene lógica completa y podemos resumir en una linea su valor de respuesta podemos utilizar la siguiente sintaxis

```
const  multiplicar = (primerNumero, segundoNumero) =>  primerNumero * segundoNumero;
console.log(multiplicar(2, 3)) // 6
```

Cabe destacar que estas functiones tampoco tienen hoisting.

Otro concepto interesante sobre las funciones a destacar es que podemos definir parametros opcionales con valores predeterminados. Miremos el siguiente ejemplo.

```
const saludar = (saludo, nombrePersona = "desconocido") => {
  console.log(`Hola ${nombrePersona}, ${saludo}`)
}

saludar('Como estas?') // Hola desconocido, Como estas?
saludar('Como te encuentras?', 'Perano') // Hola Perano, Como te encuentras?

```

Como vemos le asignamos un parametro opcional a la función el cual es nombrePersona, que si no se le asigna un valor el por defecto toma el valor de "desconocido", de esta manera podemos colocar funcionamientos opcionales a nuestras funciones.

Cabe resaltar que las funciones flecha o arrow functions, no solo difierent en su sintaxis frente a las funciones clásicas, el scope de la función opera de manera diferente en una o en otra, en el caso de las funciones clásicas, el scope hace referencia al padre desde donde es llamado mientras que en las funciones flecha, el scope es heredado del contexto superior, dicho lo anterior podemos implementar la palabra reservada "this" que en javascript se define como el objeto contexto, dicho lo anterior entendamolo con un ejemplo:

```
const persona = {
	nombre: 'Agustin',
	decirNombre(){
		console.log(this.nombre)
	}

}
console.log(persona.decirNombre()) // OUTPUT : 'Agustin'
```

Tenemos la definición de un objeto persona con una propiedad nombre y una función que escribe el nombre en la consola, al ejecutarlos vemos el resutlado esperado ya que en este caso el objeto contexto "this" hace referencia al objeto persona que tiene la propiedad nombre, ahora bien intentemos lo mismo con una una función flecha

```
const persona = {
	nombre: 'Agustin',

	decirNombre: function() {
		console.log(this.nombre)
	}

	decirNombreFuncionFlecha: () => {
		console.log(this.nombre)
	}

}

persona.decirNombreFuncionFlecha(); // OUTPUT : undefined
```

¿Que pasó?, pasó lo que tenia que suceder, en este caso como lo indicamos anteriormente el objeto de contexto "this" hereda el contexto superior que para el ejemplo se podria traducir en el objeto window que no tiene la propiedad nombre por lo qeu el resultado es indefinido


## Final del módulo

Llegamos al final de este módulo en el cual aprendimos sobre `Funciones` estos son conceptos fundamentales y basicos sobre Javascript los cuales será importante tener bien claros para continuar con lo que viene.
