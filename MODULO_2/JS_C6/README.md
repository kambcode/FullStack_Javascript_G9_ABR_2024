# Fundamentos de operadores y condicionale

En este modulo miraremos otro concepto pilar no solo de Javascript sino de todos los lenguajes de programación, empezaremos con dos estructuras de datos fundamentales en el desarrollo y como utilizarlas mediante iteraciones, estas iteraciones o también conocidas como ciclos son otro concepto compartido y común de los lenguajes de programación que encontraremos implementados de maneras si no iguales bien parecidas en todos los lenguajes de programación. _Empecemos!_

## Arreglos (Array)

Los `arreglos` son un tipo de objetos de Javascript de tipo `lista`, son aparte de las variables el segundo tipo de objeto que vamos a ver, pero este va mas alla de un objeto que los llamabamos así por sinonimo de elementos, este si es un real objeto de Javascript por lo que vale la pena hacer un breve repaso de qué es un objeto.

Los `objetos` son un concepto en común de todos los lenguajes de programación también, se refiere como tal a la abstracción de un objeto de la vida real o lógico a propiedades y metodos, la teoría nos indica que todo elemento se puede resumir en eso, propiedades y metodos. Dejemos por ahora la definición de objetos en eso.

Así entonces, un arreglo es un objeto que nos organiza elementos a manera de lista, en una lista cada elemento tiene un orden y podemos identificar los elementos por donde están ubicados númericamente, por ejemplo, el primer elemento, el segundo y así sucesivamente.

Los arrays son un objeto que cuenta con una gran variedad de metodos y propiedades para su manipulación, estos permiten el almacenamiento y manipulación de sets de datos generalmente relacionados, ilustremos el tema con un ejemplo:

```
let frutas = ['Manzana', 'Pera', 'Banano']
const frutaComer = frutas[0]
let frutas[1] = 'Papaya'
console.log(frutas) //['Manzana', 'Papaya', 'Banano']
```

Como podemos visualizar en el ejemplo, para definir arreglos utilizamos los corchetes `[]` y dentro de este para enumerar los elementos los separamos por `,`, un arreglo puede ser inicializado vacío sin ningún tipo de problema para agregar elementos mas adelante.

Como vemos la manera de referirnos a los elementos para cambiar sus valores o para tomarlos es mediante los mismos corchetes.

En este caso declaramos un arreglo de frutas con 3 elementos, luego en la variable fruta a comer almacenamos el valor que se encuentra en frutas en la posicion 0, así vemos entonces como podemos acceder a los elementos de un arreglo, si quisieramos acceder al valor Papaya, tendriamos que llamar a `frutas[1]`, lo que nos retornaría el segundo elemento, un concepto fundamental es el de que los arreglos arrancan su numeración desde 0, por tanto siempre la numeración va a ir desde 0 hasta el número de elementos - 1, esto porque si son 3 elementos la numeración sería 0, 1 y 2. Si intentamos acceder a una posición del arreglo fuera del rando [0, largo del arreglo - 1] nuestro código arrojará error.

> Podemos asegurarnos en nuestros desarrollos de no intentar acceder a elementos de un arreglo que no existe verificando que nunca se intente acceder a menos de 0 o al mas del largo del arreglo - 1, esto podemos hacerlo apoyandonos de la propiedad de los arreglos length, accedemos por ejemplo en el caso del arreglo de frutas `frutas.length`, esto retornará el largo del arreglo (3)

Luego, ya teniendo claro como definimos arreglos y como tomar sus elementos, miremos como manipularlos con algunos de sus metodos, es decir, como podemos utilizar funciones que estos implementan para agregar elementos, eliminar elementos, tomar porciones del arreglo y entre otras.

- `push` Agregar un elemento al final de un arreglo, retorna el nuevo length `const nuevaLongitud = frutas.push('Papaya')`
- `pop` Eliminamos el ultimo elemento de un arreglo, retorna el elemento eliminado `const eliminado = frutas.pop()`
- `unshift` Agregar un elemento al principio de un arreglo, retorna el nuevo length `const nuevaLongitud = frutas.unshift('Fresa')`
- `shift` Eliminamos el primer elemento del arreglo, retorna el elemento eliminado `const eliminado = frutas.shift()`

> Existen muchos mas metodos para los arreglos, estos son los mas comunes, puedes encontrar mas [**aquí**](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Recorriendo arreglos (Ciclos)

#

En muchos de nuestros desarrollos llegaremos a un reto que requerirá de recorrer nuestro arreglo, es decir, iterar sobre cada elemento por lo general para ejecutar un determinado proceso sobre cada elemento, por ejemplo para imprimir todos sus elementos sin tener que hacerlo con cada uno y así, en general cuando requerimos de efectuar una misma operación sobre todos los elementos utilizamos los `ciclos`.

Los ciclos nos sirven para ejecutar una serie de operaciones un número de veces determinado o hasta que se cumpla alguna condición, estos son aplicados en diversa cantidad de problemas del desarrollo de software pues ejecutan una serie de procesos un número conocido o no de veces, por ahora nos vamos a enfocar en como los utilizamos para esta primera solución, recorrer arreglos.

## For

El for es una estructura ciclica con una duración definida, esto porque por su naturaleza y estructura sabemos desde un inicio cuantas veces se va a ejecutar, uno de los usos mas comunes del for es para recorrer arreglos, porque antes de recorrerlo sabemos cuantas iteraciones requeriríamos para recorrerlo completamente

```
let numeros = [2, 7, 10, 8, 5, 3]
let pares = 0;
let impares = 0;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        pares ++;
    } else {
        impares ++;
    }
}

console.log(pares); // 3
console.log(impares); // 3

```

En este ejemplo recorremos el arreglo y para cada elemento verificamos si es par o impar, según la evaluación sumamos al contador de pares o impares

Se evidencia en la estructura del for 3 elementos separados por `;`, el primero es la definición de la variable pivote en este caso `let i = 0`, el segundo la condición de parada en este caso `i < numeros.length`, es decir, mientras i sea menor que 6, lo que indica que se ejecutará hasta que i sea 5 por tanto no generará error y el ultimo el paso con el que se aumenta cada ciclo `i ++` que indica que se suma de a 1, el bloque es el set de instrucciones que se ejecuta cada ciclo del For.

> Como podemos deducir de la estructura de un for, esta también genera un bloque de código comprendido dentro de sus corchetes, es decir, las variables definidas dentro de este bloque solo existiran dentro de si, por ejemplo el pivote solo existe dentro del for

Entonces, el ciclo for antes de iniciarse ya se sabe cuantas veces se va a ejecutar, por tanto es lo que llamamos `ciclo definido`

Todos los elementos de un for son personalizables, es decir, el pivote inicial, la condición de parada y el aumento del pivote son operaciones que podemos efectar según lo requiramos para nuestro proceso, por ejemplo, si queremos iniciar a recorrer nuestro arreglo desde el segundo elemento podemos modificar la declaración del pivote para no arrancar en 0 sino en 1, lo mismo si queremos parar antes del ultimo elemento podemos modificar la condición de parada y si quisieramos por ejemplo recorrer el arreglo de 2 en 2 podríamos modificar el aumento del pivote para que en lugar de sumar 1 sume de a 2.

## While

#

Cuando se de el caso de que requerimos ejecutar un ciclo no sabemos cuantas veces, sino la condición que debe cumplirse para este pare de ejecutarse o la condición que se debe cumplir mientras se ejecuta, podemos hacer uso del ciclo while, este es un ciclo que no le indicamos los 3 elementos como lo hacemos en for sino que simplemente le indicamos una condición la cual el va a verificar cada vez y si está condición se cumple va a ejecutar otra vez el proceso, cada que termina una iteración, es decir, que ejecuta el proceso completamente valida nuevamente la condición para saber si debe parar o continuarse ejecutando.

```
let estudiantes = ['Sultano', 'Perano', 'Mendano', 'Pedrito'];
let i = 0;
while(estudiantes[i] != 'Mendano'){
    i ++;
}
console.log(i)
```

En este ejemplo tenemos un caso sencillo donde queremos saber cuantos estudiantes están antes de Mendano, entonces recorremos el arreglo hasta que el estudiante sea Mendano y cuando sea paramos de ejecutarlo e imprimimos el número, si el arreglo entrara en otro orden igualmente funcionaría, aquí solo tendríamos un problema y es que si no está Mendano en el arreglo y luego i se sigue aumentando, vamos a llegar a un punto en el que vamos a apuntarle a un indice del arreglo que no existe, esto generará un error que hará nuestro código fallar, por esto no es siempre buena idea iterar sobre un arreglo con ciclos while, a menos que manejemos mediante condicionales el caso mencionado, el while se utiliza en casos mas especificos.

> El ciclo while también genera un scope propio dentro de sus llaves `{}`, es decir, las variables definidas dentro solo existiran en el contexto del while

## For Of

#

El ciclo For Of nos ayuda a iterar directamente por cada elemento de un objeto iterable de Javascript, los objetos iterables mas usados son los Arreglos y también los String implementan algunos metodos, como por ejemplo, son utilizables con el For Of, miremoslo.

```
const palabra = "Universo";

for (const letra of palabra) {
    console.log(`|${letra}|`);
}
```

En este ejercicio basico lo que hacemos es imprimir cada letra de la palabra encerrada en pipes `|`.
Aquí evidenciamos como una cadena de texto en algunas condiciones puede ser tomada como un arreglo.

Hace falta investigar más sobre cuales metodos son aplicables para strings así mismo como para arreglos porque no siempre se cumple dicha regla.

> Por supuesto for of también genera un scope

## Objetos

#

Ahora si, retomando con el tema, vamos a ver uno de los conceptos principales de la programación como tal, los objetos.

Como lo habíamos visto, los objetos son abstracciones de objetos del mundo real con sus propias propiedades y metodos, todo lo podemos abstraer a un objeto con sus caracteristicas propias (propiedades) y funcionalidades (metodos). Tomemos el clasico ejemplo de un coche. Un coche tiene propiedades como color, modelo, cilindraje, peso, número de puertas, velocidad, aceleracion y de mas, adicional, tiene sus funcionalidades o metodos, como puede ser acelerar, frenar, encenderse, apagarse y otros, miremos como representariamos mediante un objeto de Javascript un coche

```
let coche = {
    color: "Rojo",
    modelo: "Volkswagen Beetle",
    peso: 500,
    numeroPuertas: 4,
    encenderse: function () {
        console.log(`Coche ${this.modelo} ${this.color} encendido !`);
    },
    acelerar: function () {
        console.log(`Coche acelera!`);
    },
    cambiarColor: function (color) {
        console.log(`Coche cambia de color ${this.color} a ${color}`);
        this.color = color;
    },
};
console.log(coche.peso); // 500
coche.peso = 520;
console.log(coche.peso); // 520
coche.cambiarColor("Naranja");
console.log(coche.color); // Naranja
coche.encenderse();
```

En Javascript utilizamos las llaves para definir objetos, como si fuera una variable inicializamos su definición asignandole un nombre y luego entre corchetes curvos definimos sus propiedades haciendo uso de las `keys` y sus metodos, estas `key` son los identificadores únicos de propiedades y metodos de objetos, por ejemplo, en el ejemplo anterior las llaves de nuestro objeto coche serían: - color - modelo - peso - numeroPuertas - encenderse - acelerar - cambiarColor

En este caso nuestro coche tiene 4 propiedades y 3 metodos, son encenderse, acelerar y cambiar color, como vemos podemos pedir argumentos para los metodos y podemos acceder a las propiedades de nuestro objeto dentro de ellos haciendo uso de `this.` con esto, dentro del contexto de nuestro objeto accederemos a sus propiedades o metodos.

Como vemos podemos acceder a las propiedades de nuestro objeto igual que lo haciamos por ejemplo a la propiedad length de nuestros arreglos, también hay otra manera de acceder a nuestras propiedades y es indicando la llave entre corchetes al igual que como si fuera un arreglo `console.log(coche['numeroPuertas']) // 4`

Los objetos son sumamente utilizados dentro de los códigos de nivel profesional, son muy utiles para encapsular funcionalidades y son el foco principal de uno de los patrones de diseño mas utilizados a nivel mundial, el OOP o Object Oriented Programming, o programación orientada a objetos, es un patrón el cual define reglas para definir objetos e implementarlos, hay muchos frameworks en el mercado que trabajan en base a este patrón.

Los objetos son el abrebocas a un concepto un poco más avanzado pero CLAVE en Javascript el cual es el tema de clases y prototipos, este tema lo veremos más a detalle en futuros módulos.

### Recorriendo objetos

Para recorrer objetos podemos utilizar un metodo muy parecido al `For of` pero en este caso es `For in`, de esta manera podemos iterar sobre las llaves de un objeto, miremos un ejemplo.

```js
const myObject = {
  name: "Perano",
  lastName: "Sultano",
  age: 40,
  nickName: "The Crack",
};

function logObject(object) {
  for (const key in object) {
    console.log(`Property Name: ${key} | Property Value: ${object[key]}`);
  }
}

logObject(myObject);
// Property Name: name | Property Value: Perano
// Property Name: lastName | Property Value: Sultano
// Property Name: age | Property Value: 40
// Property Name: nickName | Property Value: The Crack
```

Como vemos accedemos al nombre de cada llave la cual la tomamos en una variable llamada `key` y luego utilizamos esta junto con el objeto para obtener su valor, de esta manera podemos iterar sobre objetos y por ejemplo buscar si contienen alguna propiedad o simplemente imprimir su información, nos abre solución a muchos posibles problemas en cuanto a llaves de objetos.

## Final del módulo

#

Llegamos al final de este módulo en el cual aprendimos sobre `Arreglos`, `Ciclos`, qué son a su vez otros `Controladores de flujo` y `Objetos`, ahora si que si estamos listos para desarrollar códigos de muy alto nivel, con elementos de un software de nivel profesional, vamos a seguir profundizando en conceptos que implementan a granden rasgos lo que hemos visto y nos ayudan a implementar mejores practicas y mejorar nuestro código en general, a partir de este módulo puede que las tareas se planteen un poco más complejas pero así mismo el avance será a pasos de gigantes.
