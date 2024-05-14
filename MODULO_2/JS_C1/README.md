# Iniciemos con Javascript

Antes de empezar, como siempre es muy importante tener un contexto conceptual de nuestro tema a trabajar, en este caso Javascript, primero vamos a hacer unas aclaraciones muy importantes respecto a algunas de las dudas mas comunes referentes al lenguaje y algunos de sus mitos. Si no has leido mucho sobre el tema o no has escuchado nada al respecto podemos saltar a la siguiente sección `Qué es?`.

## Mitos y preguntas comunes

- **Javascript tiene algo que ver con Java?** Lo único que tiene de relacionado Javascript con Java es que ambos son lenguajes de programación pero son muy distintos, tienen enfoques distintos, maneras de funcionar diferentes e incluso tienen desarrolladores diferentes.
- **Javascript es un buen lenguaje para empezar?** Existen mitos que dicen que Javascript es un lenguaje avanzado con conceptos que las personas nuevas en el mundo de la programación se les dificulta, sin embargo, esto no es del todo cierto, Javascript como todos los lenguajes tienen conceptos avanzados que podemos utilizar para desarrollos así mismo más avanzados así como cualquier otro lenguaje de programación, obviando esto Javascript es un excelente lenguaje de programación para recién llegados a la familia del desarrollo al cual podremos agregarle dificultad conforme obtenemos experiencia.
- **Javascript es un lenguaje que solo sirve para desarrollo web?** Si bien el desarrollo web es el enfoque principal de javascript no es su único enfoque, el crecimiento que se le ha dado a Javascript mencionando por ejemplo lo que es NodeJS han llevado al lenguaje a ser de los más versátiles y utilizados por todo tipo de aplicaciones alrededor del mundo, por esto no debemos preocuparnos si acaso tenemos dudas de si el desarrollo web es lo que nos gusta, porque es seguro que con Javascript se nos abre un mundo de opciones que va mucho mas allá del desarrollo web

_Ahora si, arranquemos!_

## Qué es?

Javascript apareció por primera vez el 4 de diciembre de 1995, se desarrolló luego de la latente necesidad de hacer las páginas web que ya tomaban mucha fuerza dinámicas, hasta ese entonces las paginas web eran meramente estáticas y por ende carecían de mucha interactividad, así Netscape emprendió el desarrollo de un lenguaje independiente para poder desarrollar paginas web dinamicas.

Es un lenguaje de programación interpretado, que soporta gran variedad de paradigmas, desde event-driven hasta object-oriented, Javascript hoy como lo conocemos es el tercer pilar de las paginas web, junto con HTML y CSS conforman mas del 98% de paginas web que conocemos hoy día, es un lenguaje nos permite implementar caracteristicas complejas a las paginas web, como actualizaciones de contenido, mapas interactivos, graficos animados, etc. Tomemos como ejemplo el siguiente código:

**HTML**

```
<p>Persona 1: Sultano</p>
```

**Javascript**

```
const person = document.querySelector('p');

person.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  person.textContent = `Player 1: ${name}`;
}
```

Con este ejemplo de código le estamos agregando interactividad a nuestra etiqueta p, de manera que al darle clic nos pregunte por un nuevo nombre el cual al indicarlo será el nuevo texto que ilustre nuestra etiqueta, también nos permite por ejemplo generar variables, usar operadores lógicos y matematicos, ejecutar código de manera que nuestra pagina se maneje mediante eventos, entre otras.

Veamos entonces, los elementos que componen un código de Javascript

## Variables en JS

Como mencionamos anteriormente las variables son una de las principales adiciones de Javascript a nuestras paginas web, pero entonces, entendamos que es una variable.

Las variables son un concepto fundamental en cualquier lenguaje de programación; los datos son lo que utilizan nuestros programas informaticos, por ejemplo, el nombre de un usuario en una red social es un dato. Una gran parte de la programación se basa en manipular o mostrar datos y para esto por supuesto, necesitamos tener estos datos almacenados en algún lugar para luego modificarlos y así mismo guardar su nuevo valor.

Pensemos por ejemplo en información acerca de una persona, que datos lo conforman, podríamos hablar de edad, sexo, estatura, peso, etc, entonces cada una de estas caracteristicas son datos que podemos almacenar para mostrar o transformar, pensemos por ejemplo en una aplicación de salud donde tengamos que guardar todos estos datos para monitoreo, luego, cuando nuestro peso cambie, ya sea porque subimos de peso o porque bajamos, vamos a necesitar de modificar ese dato, para esto vamos a requerir de almacenar ese valor modificarlo y luego guardarlo, entonces, podemos hacer uso de las variables de Javascript.

Sabiendo lo anterior, ahora podremos almacenar valores para utilizarlos mas adelante a lo largo de nuestra aplicación. En Javascript para definir variables utilizamos las palabras claves definidas por el lenguaje junto con opcionalmente un operador de asignación el cual nos sirve para indicar esa variable que valor va a contener, claro que podemos declarar variables sin valores iniciales también, en este caso las palabras claves para definir variables son `var`, `let` y `const`. Veamos un ejemplo de cada una y como las utilizamos para la definición:

```
const  miVariableNumerica  =  2;

var  miVariableBoolean  =  true;

let  miVariableTexto  =  'Hola mundo'
```

Como vemos la manera de definirlas según la palabra clave que utilicemos no afecta la estructura de la definición, entonces, por qué existen 3 maneras distintas? Estas tres maneras distintas cumplen distintas necesidades, la primera es el tema de la naturaleza de nuestra variable, una variable cuyo valor no puede ser cambiado luego de ser definida es una **_constante_**, para definir constantes usamos la palabra clave, `const`, las variables declaradas con `let` y `var` pueden ser modificadas luego de ser definidas, las declaradas con var pueden ser incluso redefinidas en distintos puntos de nuestro código, lo miraremos con mas profundidad en la siguiente sección.
Por otro lado tenemos el tema del **_scope_** que es otro concepto muy importante que vamos a analizar a continuación.

Hagamos un resumen

- `const`
  - Nos sirve para definir variables constantes
  - No pueden ser reasignadas, es decir, no puede cambiarse el valor que contiene
  - No pueden ser redefinidas, es decir, no podemos volver a definir la variable
  - Es importante introducir el concepto de mutabilidad para el caso de objetos, si definimos un objeto como const, las propiedades de dicho objeto podran ser modificadas al ser comportamientos mutables, para evitar esto podemos usar algunas estrategias como por ejemplo:
    -Object.freeze Aun cuando usamos const en un objeto, se pueden modificar sus propiedades. para “congelar” el objeto y evitar que las propiedades se modifiquen podemos usar el Object.freeze
    -Object.defineProperty este método nos permite que definir una propiedad de un objeto, y prohibir que se sobreescriba.
  - En el caso de los arreglos tenemos un comportamiento igualmente mutable en sus contenidos, pero podemos llevar a cabo algunas practicas para evitar esta mutabilidad por ejemplo:
    - Push: agregar un elemento al final del arreglo, la forma mutable sería:
      ```
        const newUser = {
          id:4,
          name: "Stephen Watkins",
          email: "stephen.watkings@example.com"
        }
        usuarios.push(newUser) // [{ id: 1}, {id:2}, {id: 3}, { id: 4} ]
      ```
      la forma inmutable hariamos uso del operador spread asi:
      ```
        const newUsuarios = [...usuarios, newUser ]
      ```
- `var`
  - Nos sirve para guardar variables que pueden cambiar en el futuro
  - Pueden ser reasignadas
  - Pueden ser redefinidas
- `let`
  - Nos sirve para guardar variables que pueden cambiar en el futuro
  - Pueden ser reasignadas
  - No pueden ser redefinidas

> Inicialmente en Javascript solo existia la palabra clave `var` para definir variables, esta por su comportamiento poco estricto fue complementada con las `const` y `let` las cuales tienen un comportamiento un poco mas controlado, entonces, una buena practica es usar lo mínimo posible variables definidas con `var`

Las variables en todos los lenguajes de programación tiene un tipo asociado, es decir, si le asignamos un valor a una variable llamada por ejemplo `miNumero`, al definirla computacionalmente nuestro lenguaje le asocia un tipo, este tipo puede asociarse automaticamente como es el caso de Javascript o puede suceder que sea obligatorio definir cual es el tipo de la variable, como pasa por ejemplo con Java. A Javascript se le llama lenguaje debilmente tipado porque a diferencia de los fuertemente tipados maneja un tipado dinamico calculado al momento que le asignas el valor a la variable.

Los tipos que pueden tomar las variables varian también dependiendo del lenguaje, en el caso de Javascript los tipos principales son: `number` para numeros, `string` para cadenas de texto, `boolean` para valores true o false, los posibles valores que puede tomar cada uno y un detalle mas profundo de su funcionamiento lo veremos mas adelante.


## Final del módulo

Llegamos al final de este módulo en el cual aprendimos sobre `Teoría inicial de Javascript` y `Variables`, estos son conceptos fundamentales y basicos sobre Javascript los cuales será importante tener bien claros para continuar con lo que viene.
