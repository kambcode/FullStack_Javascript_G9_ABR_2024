# Objetos

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


Llegamos al final de este módulo en el cual aprendimos sobre  `Objetos`, ahora si que si estamos listos para desarrollar códigos de muy alto nivel, con elementos de un software de nivel profesional, vamos a seguir profundizando en conceptos que implementan a granden rasgos lo que hemos visto y nos ayudan a implementar mejores practicas y mejorar nuestro código en general, a partir de este módulo puede que las tareas se planteen un poco más complejas pero así mismo el avance será a pasos de gigantes.
