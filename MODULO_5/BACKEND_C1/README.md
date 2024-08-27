# Repaso y ECMAScript

## Repaso

### Condicionales

Podemos usar condicionales para controlar el flujo de nuestro código, en casos que necesitemos un comportamiento u otro en base a una condición, los condicionales que podemos usar son

- `If`
- `Else`
- `Else If`
- `Switch`

> Cabe recordar que el mismo funcionamiento que podemos hace con Else If lo podemos hacer con Switch entonces queda a consideración del desarrollador como afrontar un determinado problema

Los condicionales cuentan con ciertas condiciones para ejecutar ciertos flujos y siempre tienen la opción de agregar un flujo predeterminado para cuando se cumpla ninguna condición verificada. Puedes leer mas a profundidad sobre condicionales [**aquí**](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)

### Arrays (Arreglos)

Los arreglos son una estructura de datos que nos permite organizar elementos a manera de lista, podemos acceder a ellos con su indice y podemos iterarlos ayudandonos de los distintos metodos y propiedades del prototipo Array.

Repasando algunos de los metodos y propiedades mas importantes de Array:

- `filter` Para filtrar el arreglo según condiciones
- `find` Para encontrar un elemento que cumpla cierta condición
- `sort` Para organizarlo según necesitemos
- `push` Para adicionar elementos al final
- `pop` Para eliminar elementos al final

Para informarte mas sobre el prototipo array y los metodos que posee puedes apoyarte de esta [**web**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Objects (Objetos)

Los objetos son una de manera de organizar datos de las mas usadas en todos los desarrollos, permite definir propiedades y metodos para distintos elementos a los que luego podemos acceder por sus llaves. Representa una abstración de funcionalidades y tiene un potencial infinito en cuanto a distribución de información

Para iterar sobre las distintas llaves de un objeto como si se tratase de un arreglo, podemos utilizar el ciclo for in, este nos permite iterar sobre todas las keys de nuestro objeto y realizar un determinado proceso con cada una.

Para informarte mas sobre objetos, los metodos que ofrecen y todo lo que ponen a nuestra disposición sigue este [**link**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

```
// Objetos vacios
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
// Objetos booleanos
const o = new Object(true);
// Objeto para un carro
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
// { make: 'Ford',model: 'Mustang',year: 1969}
// Se peude reescribir como
var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
}; // { make: 'Ford',model: 'Mustang',year: 1969}
```

### Loops (Ciclos)

Los ciclos son uno de los controladores de flujo fundamentales del desarrollo de software, nos permite ejecutar un set de instrucciones un número de veces definida o indefinida, de manera que podamos reutilizar código y tener un workspace mucho mas organizado

Recordemos que para el caso de los ciclos definidos la opción mas común es el `for`, nos permite indicar desde el inicio cuantas veces necesitamos que se ejecute nuestro ciclo. Por otro lado, tenemos los ciclos indefinidos, que es cuando requerimos de ejecutar un ciclo mientras se cumpla una condición, para este tipo podemos hacer uso del ciclo `while`, que aunque también puede pasar a ser definido si lo requerimos de esa manera, es por naturaleza la mejor opción para ejecutar ciclos indefinidos.

Para leer mas sobre ciclos haz clic [**aqui**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

```
// Ciclo for
let mi_array = ['U','N','I','V','E','R','S','O'];
for (let index = 0; index < mi_array.length; index++) {
    const element = mi_array[index];
    console.log(element);
}
// Ciclo while
let position = 0;
while (position <= mi_array.length) {
    const element = mi_array[position];
    console.log(element);
    position += 1;
}
```

## ECMAScript

Ahora vamos a ver un tema que suele resulta un poco confuso cuando empezamos en el mundo de Javascript y es que cuando leemos sobre metodos, declaraciones, operadores y de más sobre Javascript podemos leer con frecuencia frases como "Fue implementado en ES6", pero entonces, que es ES6?

ES6 o simplemente ES se refiere a ECMAScript 6, o ECMAScript en su versión 6, este es una recopilación de estandares para el desarrollo web los cuales se buscan aplicar a los distintos lenguajes de programación web de manera que los motores web que compilan todo el código de nuestros desarrollos web puedan trabajarse en base a esos estandares y podamos todos los creadores de lenguajes de programación y desarrolladores hablar un mismo idioma en lo que se refiere a desarrollo web.

Ecma International es una organización que crea estandares de tecnología, estos mediante un estandar llamado ECMA-262 generaron un estandar para los lenguajes de scripting de proposito general, ECMAScript entra dentro de este estandar, entonces, luego ECMAScript como tal va evolucionando y generando nuevas versiones pero ese fue su real nacimiento.

Así entonces, cuando leemos adiciones a Javascript en la versión X de ES podemos entender que son implementaciones que se hacen en Javascript nuevas en base a nuevas versiones de estandares que se implementan en nuevas versiones de ECMAScript. Vamos a ver las principales adiciones de ES6 a Javascript y para que las podemos utilizar.

### Map

#

`Map` es una metodo para iterar sobre un arreglo el cual fue introducido con ES6 a Javascript, lo que destaca de esta nueva funcionalidad es que no solo iteramos sobre un arreglo sino que dentro de nuestra función retornamos un elemento, cada elemento retornado de este ciclo map se va a guardar en un arreglo el cual es retornado, en otras palabras, estamos creando un nuevo array con los resultados de las operaciones realizadas a cada elemento de nuestro arreglo. Vamos a hacerlo mas claro con un ejemplo

Digamos que se requiere de multiplicar por dos todos los elementos de un arreglo, podríamos hacerlo de la manera habitual simplemente recorriendo el arreglo con un ciclo y multiplicando los valores por dos mientras los guardamos en el mismo arreglo

```
const miArreglo = [2, 5, 7, 1, 3, 4];

const nuevoArreglo = [];
for (let numero of miArreglo) {
    nuevoArreglo.push(numero * 2);
}

console.log(nuevoArregloMap); // [ 4, 10, 14, 2, 6, 8 ]
```

Esta misma necesidad la podemos solucionar con map super fácil de la siguiente manera

```
const miArreglo = [2, 5, 7, 1, 3, 4];
const nuevoArregloMap = miArreglo.map((numero) => numero * 2);

console.log(nuevoArregloMap); // [ 4, 10, 14, 2, 6, 8 ]
```

Así mismo podemos implementar logicas mas complejas si se requiere, miremos el siguiente ejemplo en el que queremos adicionar una regla, si el número es par lo multiplicamos por 2 y si es impar por 3

```
const numeros = [3, 5, 8, 10, 2, 4, 7];

const nuevosNumeros = numeros.map((numero) => {
    if (numero % 2 === 0) {
        return numero * 2;
    } else {
        return numero * 3;
    }
});

console.log(nuevosNumeros); //[9, 15, 16, 20, 4, 8, 21];

```

Entonces tenemos mas claro la funcionalidad del metodo de Array `map`

> Adicionalmente podemos si se requiere agregar un segundo parametro el cual es el indice de la iteración en el arreglo y un tercero que es el arreglo completo en todo momento, map puede usarse de la siguiente manera `arreglo.map(item, indice, arreglo) => {}`

### Filter

#

Este es uno que ya habíamos mencionado en el apartado de arreglos, nos sirve para obtener los elementos de un arreglo que cumplen con nuestra condición filter. De la siguiente manera

```
const estudiantes = [
    { nombre: "Sultano", nota: 3.0 },
    { nombre: "Perano", nota: 2.9 },
    { nombre: "Mandano", nota: 3.7 },
    { nombre: "Mendano", nota: 3.9 },
    { nombre: "Multano", nota: 4.2 },
    { nombre: "Pepe", nota: 4.3 },
    { nombre: "Pedrito", nota: 4.7 },
    { nombre: "Ricardito", nota: 2.1 },
    { nombre: "Fulano", nota: 1.9 },
    { nombre: "Isabelita", nota: 5.0 },
    { nombre: "Laurita", nota: 4.0 },
];

//Queremos saber cuales estudiantes aprobaron, es decir, cuales fueron las notas definitivas iguales o por encima de 3.0

const estudiantesAprueban = estudiantes.filter(
    (estudiante) => estudiante.nota >= 3.0
);

console.log(estudiantesAprueban);
// [
//     { nombre: 'Sultano', nota: 3 },
//     { nombre: 'Mandano', nota: 3.7 },
//     { nombre: 'Mendano', nota: 3.9 },
//     { nombre: 'Multano', nota: 4.2 },
//     { nombre: 'Pepe', nota: 4.3 },
//     { nombre: 'Pedrito', nota: 4.7 },
//     { nombre: 'Isabelita', nota: 5 },
//     { nombre: 'Laurita', nota: 4 }
//   ]

```

También al igual que en map podemos implementar logicas mas avanzadas y también agregar otros dos argumentos del filter para tener acceso al indice y el arreglo en todo momento

### Some

#

Cuando requerimos de verificar si en un arreglo hay por lo menos un elemento que cumpla una cierta condición que requerimos, podemos utilizar este metodo, es un metodo al cual le pasamos un lógica simple o compuesta y el va a validar para cada elemento si la cumple, en caso de que al menos un elemento cumpla la condición, retorna verdadero, caso contrario retorna false

En este caso tuvimos una urgencia y requerimos de un amigo medico, quisieramos saber si entre nuestros amigos hay al menos uno

```
const amigos = [
{ nombre: "Sebas", profesion: "DJ" },
{ nombre: "Andrés", profesion: "Medico" },
{ nombre: "Pedrito", profesion: "Artista" },
{ nombre: "Cata", profesion: "Ingeniera" },
];

const hayMedico = amigos.some((amigo, indice, arreglo) => amigo.profesion === "Medico");

console.log(hayMedico); // true
```

Al igual que filter y map podemos acceder al indice y el arreglo si lo requerimos como argumentos

### Reduce

#

Reduce es un metodo cuyo funcionamiento puede resultar algo complejo por momentos, esto debido a la gran cantidad de funcionalidades o usos que tiene, miremos un ejemplo con su uso mas común.

Queremos obtener el valor de la suma de todos los elementos de un arreglo, por ejemplo

```
const numeros = [2, 5, 7, 8, 3];

const sumaNumeros = numeros.reduce(
    (acumulador, valorActual) => acumulador + valorActual
);

console.log(sumaNumeros); // 25
```

Reduce entonces, nos sirve para ejecutar ciclos en base a un acumulador y al final retorna el resultado acumulado, reduce nos permite tener como argumentos, el acumulador, el valor actual y también un tercer argumento opcional que es el valor inicial

ECMAScript trajo consigo en su versión 6 muchas adiciones muy interesantes, estas solo son unas pocas de ellas, puedes leer mas dobre ES6 [**aquí**](https://www.divami.com/blog/top-ecmascript-es6-features-every-javascript-developer-should-know/)

## Final del módulo

#

Llegamos al final de este módulo donde enfatizamos en el módulo pasado, el cual tiene una gran carga teórica y por practicar pues son las bases de desarrollos ya a nivel profesional, en este arrancamos repasado lo visto anteriormente de `arreglos`, `objetos` y `condicionales` para luego dar paso a una aclaración teorica de un concepto muy importante en cuanto al entendimiento de Javascript como lo es ECMAScript y tres de sus implementaciones en su versión 6 que son muy utilizadas a lo largo de nuestros desarollos, nuevamente haremos mucho enfasis en ejercicios para poner en practica estos importantes conceptos esta vez ya para concluir y dar inicio con conceptos mas propios de Javascript, pasando ya los conceptos basicos generales.
