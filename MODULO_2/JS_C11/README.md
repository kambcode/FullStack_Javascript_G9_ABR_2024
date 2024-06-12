# FrontEnd Modificando el DOM

Bien, ahora tenemos claros conceptos del frontend sobre los que empezaremos a realizar implementaciones de manera que pasemos a la practica estas implementaciones de Javascript a nuestras construcciones web, miremos entonces todas estas herramientas de las que disponemos para realizar modificaciones sobre el DOM y en general para darle mucha mas vida a nuestras aplicaciones.

## Tag `<script>`

El elemento o tag `<script>` es la base de la implementación de Javascript a nuestras paginas web y es que este nos sirve para embeber código Javascript dentro de nuestro HTML, realmente no lleva mayor complejidad que eso, simplemente es una etiqueta semantica que nos ayuda a indicarle a nuestro DOM y al HTML que lo que esté contenido dentro es código Javascript. Miremos un ejemplo.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="titulo"></h1>
    <script>
      document.getElementById("titulo").innerHTML = "Hola Javascript!";
    </script>
  </body>
</html>
```

En el código anterior lo que estamos haciendo es que dentro de un documento HTML estamos definiendo un documento con solamente una etiqueta `h1` y otra etiqueta `script`, como vemos la etiqueta `h1` no contiene ningún tipo de contenido ni texto, solamente tiene como propiedad `id="titulo"`, luego en el script lo que hacemos es que usando el objeto `documento` utilizamos un metodo llamado `getElementById("titulo")` y accedemos a la propiedad `innerHTML` que este metodo retorna y le asignamos el valor de `"Hola Javascript!"`, aquí nos estamos adelantando un paso en el contenido de la sección pero considerando que lo hicimos cabe destacar el funcionamiento de lo que utilizamos.

`document` es un objeto que contiene muchos metodos para ayudarnos a manipular el `DOM`, en este caso utilizamos el metodo `getElementById()` el cual nos recibe un parametro de tipo String que es el id que vamos a buscar en el documento, esto va a retornar el objeto encontrado con dicho id, luego a ese objeto le accedemos a la propiedad `innerHTML` que lo que contiene es el HTML dentro de este elemento, que en el caso de titulo es nada porque esta vacío y le asignamos el texto definido, de esta manera lo que estamos haciendo es colocar dentro de ese `h1` ese texto indicado, es como si tuvieramos al final esto sin Javascript.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="titulo">Hola Javascript!</h1>
  </body>
</html>
```

Ya empezamos a ver la potencia que tiene Javascript junto con HTML y CSS para crear paginas web mucho mas robustas. Entonces la utilidad de esta etiqueta es esa, para contener nuestras implementaciones de Javascript. Por supuesto esta etiqueta puede llevar ciertos atributos para modificar su funcionamiento, miremoslas.

- `async`. Especifica si el código es descargado en paralelo a la construcción de la pagina y es ejecutado tan pronto se tenga disponible (antes de la construcción de la pagina) (solo aplica para códigos externos)
- `crossorigin`. Configura el modo de las peticiones a HTTP CORS Request
- `defer`. Especifica si el código es descargado en paralelo a la construcción de la pagina, es decir, el código se ejecuta luego de que la pagina haya sido construida (solo aplica para códigos externos)
- `integrity`. Permite al navegador descargar código solo cuando se verifique que la fuente del código no ha sido manipulada
- `nomodule` Especifica que el código no debe ser ejecutado en navegadores que soporten modulos `ES2015`
- `referrerpolicy` Especifica el referente para la información enviada cuando se consulta un código
- `src` Especifica el URL del código externo
- `type`. Especifica el tipo del código

A continuación podemos ver algunos ejemplos:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- ASYNC -->
    <script src="./my_script.js" async></script>
    <!-- Defer -->
    <script type="text/javascript" src="funciones.js" defer="defer"></script>
    <!-- HTML4 y (x)HTML -->
    <script type="text/javascript" src="javascript.js"></script>
    <!-- HTML5 -->
    <script src="javascript.js"></script>
    <script type="text/javascript">
      //Como puedes ver tambien puedes incluir codigo javascript en medio de las etiquetas para su procesamiento
      const text_alert = "Hello world";
      console.log("message from admin");
      alert(text_alert);
    </script>
  </head>
  <body>
    <h1 id="titulo">Hola Javascript!</h1>
  </body>
</html>
```

Como vemos las propiedades son meramente para la manipulación en cuanto a cuando se carga código externo, practica para nada recomendada y así mismo utilizada en casos muy remotos, por tanto no profundizaremos en el uso de estas propiedades, si quieres continuar leyendo sobre el tema sin embargo si quieres puedes consultarlo [**aquí**](https://www.w3schools.com/tags/tag_script.asp).

Continuemos entonces a ver las herramientas con las que contamos para modificar el DOM.

## Metodos DOM

Ahora si, miremos entonces las herramientas que tenemos con Javascript para modificar el DOM dinamicamente.

Como su nombre lo indica los metodos DOM son metodos que representan las acciones que podemos realizar sobre el DOM, es decir, sobre sus elementos HTML. Estas interactuan con las propiedades DOM las cuales son valores que nuevamente, representan propiedades de los elementos HTML de nuestro DOM.

Cuando hablamos del API DOM nos estamos refiriendo a todo este conjunto de propiedades y metodos que podemos utilizar para modificar todo lo que conforma el DOM del HTML de nuestra pagina. Es importante destacar también que cada elemento de HTML es mapeado en Javascript como un objeto, con sus propiedades y metodos, por tanto estas propiedades y metodos también hacen parte de este API gigante que nos sirve para agregar dinamismo a nuestra pagina.

Recordemos ahora la imagen que vimos en el modulo anterior donde dimos un inicio a temas del DOM, imagen que representaba graficamente el DOM de una aplicación con unas pocas etiquetas.

![DOM Inicial](./resources/EjemploDOM.png)

Como vemos todo es un arbol, cada elemento tiene hijos y cada elemento está relacionado con sus propiedades, el objeto raiz de todas las operaciones que vamos a intentar realizar sería `document` como bien lo hemos visto el cual hace referencia al DOM. Miremos entonces un ejemplo de la implementación de este API DOM

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="titulo">Texto inicial</h1>
    <script>
      console.log(document.getElementById("titulo").innerHTML); // Texto inicial
      document.getElementById("titulo").innerHTML = "Nuevo Texto";
      console.log(document.getElementById("titulo").innerHTML); // Nuevo Texto
    </script>
  </body>
</html>
```

Como vemos accedemos a la propiedad `innerHTML` inicialmente del elemento `h1` que si la imprimimos tiene el valor de `Texto inicial` pero luego la reemplazamos y al intentar imprimirlo nuevamente vemos como el valor a cambiado.

Miremos entonces algunos de los metodos de los que disponemos para modificar el DOM.

### Encontrando elementos

| **Metodo**                            | **Descripción**                                              |
| ------------------------------------- | ------------------------------------------------------------ |
| document.getElementById(id)           | Retorna el elemento encontrado, buscando por la propiedad id |
| document.getElementsByTagName(name)   | Encuentra el elemento por el nombre de la etiqueta           |
| document.getElementsByClassName(name) | Encuentra el nombre por el valor de la propiedad `class`     |

### Modificando elementos

| **Propiedad**                        | **Descripción**                                     |
| ------------------------------------ | --------------------------------------------------- |
| element.innerHTML = new html content | Modifica el HTML interno del elemento propiedad id  |
| element.attribute = new value        | Le asigna el valor deseado a la propiedad HTML dada |
| element.style.property = new style   | Modifica el estilo dado del elemento HTML           |

| **Metodo**                             | **Descripción**                                           |
| -------------------------------------- | --------------------------------------------------------- |
| element.setAttribute(attribute, value) | Otra manera de modificar la propiedad HTML de un elemento |

### Agregando nuevos elementos

| **Metodo**                      | **Descripción**                       |
| ------------------------------- | ------------------------------------- |
| document.createElement(element) | Crea el nuevo elemento HTML dado      |
| document.removeChild(element)   | Eliminar el hijo dado a un elemento   |
| document.appendChild(element)   | Agrega un nuevo hijo a un elemento    |
| document.replaceChild(new, old) | Reemplaza el hijo dado de un elemento |
| document.write(text)            | Escribe en el documento apuntado      |

### Agregando Event Handlers

Este tema de Eventos es la siguiente sección.

| **Metodo**                                             | **Descripción**                           |
| ------------------------------------------------------ | ----------------------------------------- |
| document.getElementById(id).onclick = function(){code} | Agrega al evento dado la función asignada |

También podemos buscar elementos según la etiqueta, no es muy recomendada esta practica y es poco utilizada, sin embargo puedes leer sobre este tema en el siguiente [enlace](https://www.w3schools.com/js/js_htmldom_document.asp).

## Event Listeners

Ahora que entendemos como modificar el DOM dinamicamente y por tanto sabemos como utilizar Javascript para ello, probablemente nos estamos haciendo la pregunta de como elegimos cuando se ejecutan que porciones de código. Miremoslo.

Como sabemos Javascript es un lenguaje que entre tantos paradigmas utiliza mucho los eventos, estos eventos son el metodo que vamos a utilizar para saber cuando ejecutar ciertas porciones de código de nuestro Javascript, que por supuesto resulta bastante conveniente también por las interacciones con el usuario. Miremos entonces un ejemplo antes de mirar los distintos eventos de los cuales disponemos.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="titulo"></h1>
    <script>
      document.getElementById("titulo").innerHTML = "Hola Javascript!";
      function buttonClickedAlert() {
        alert("Se hizo clic en el botón");
      }
    </script>
    <button onClick="buttonClickedAlert()">Hazme Clic</button>
  </body>
</html>
```

En el ejemplo definimos un botón el cual tiene como propiedad onClick `"buttonClickedAlert()"`, esto lo que le indica es que en el momento que se haga clic sobre el botón se va a ejecutar la función dada, en este caso `buttonClickedAlert()` que lo que hace es generar una alerta con el mensaje "Se hizo clic en el botón", entonces de esta manera podemos ejecutar la función que queramos al hacer clic en determinado botón.

Los eventos pueden ser utilizados sobre cualquier elemento HTML.

Esto nos sirve por ejemplo para gestionar formularios una vez se hayan llenado y de mas, miremos algunos de los eventos que podemos utilizar mas comunmente, porque la lista es extensa.

| **Evento**  | **Descripción**                                 |
| ----------- | ----------------------------------------------- |
| onchange    | Cuando el elemento HTML cambia                  |
| onclick     | Cuando se hace clic sobre el elemento HTML      |
| onmouseover | Cuando el mouse se mueve sobre el elemento      |
| onmouseout  | Cuando el mouse sale del elemento               |
| onkeydown   | Cuando se presiona una tecla del teclado        |
| onload      | Cuando el navegador termina de cargar la pagina |

## ES6 Selectores

Con ES6 se implementó una nueva manera de buscar elementos en nuestro DOM, esta consiste en la utilización de dos metodos `querySelector()` y `querySelectorAll()`, en lo que se basa su funcionamiento es en la utilización de expresiones regulares para referirnos a los elementos a buscar, de esta manera podemos estandarizar la manera como obtenemos los elementos dando pie a muchisimas funcionalidades sobre la obtención de etiquetas.

Miremos un ejemplo inicial y luego profundizamos sobre su implementación.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h2 class="SubtituloGrande">Sub Grande</h2>
    <h1 id="TituloVerde">Titulo Verde 2</h1>
    <h1 id="TituloNegroGrande">Titulo Negro 3</h1>
    <h1 id="TituloNegroNormal">Titulo Negro 1</h1>
    <h1 id="TituloNegroGrande">Titulo Negro 2</h1>
    <h1 id="TituloVerde">Titulo Verde 1</h1>

    <script>
      const tituloNegro = document.querySelector("#TituloNegroGrande");
      console.log(tituloNegro.innerHTML); // Titulo Negro 3
    </script>
  </body>
</html>
```

Para este ejemplo, usando `querySelector("#TituloNegroGrande")` con el simbolo # le indicamos que buscaremos por id, luego notamos que hay dos etiquetas que tienen el mismo id, este metodo retorna el primer elemento que cumpla con la condición, por otro lado si hacemos lo siguiente.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h2 class="SubtituloGrande">Sub Grande</h2>
    <h1 id="TituloVerde">Titulo Verde 2</h1>
    <h1 id="TituloNegroGrande">Titulo Negro 3</h1>
    <h1 id="TituloNegroNormal">Titulo Negro 1</h1>
    <h1 id="TituloNegroGrande">Titulo Negro 2</h1>
    <h1 id="TituloVerde">Titulo Verde 1</h1>

    <script>
      const tituloNegro = document.querySelector("#TituloNegroGrande");
      console.log(tituloNegro.innerHTML); // Titulo Negro 3

      const titulosNegros = document.querySelectorAll("#TituloNegroGrande");
      console.log(titulosNegros); // [h1#TituloNegroGrande, h1#TituloNegroGrande]
    </script>
  </body>
</html>
```

Observamos como para el caso de `querySelectorAll` este retorna un arreglo con todos los nodos que cumplan con la caracteristica dada, esta es la diferencia en cuanto a funcionamiento de los dos metodos, miremos ahora los posibles selectores que podemos usar.

| **Selector**     | **Descripción**                                                                | **Ejemplo**                               |
| ---------------- | ------------------------------------------------------------------------------ | ----------------------------------------- |
| \*               | Retorna todos los elementos si es usado con `querySelector` retorna el primero | document.querySelectorAll('\*')           |
| Tipo de Etiqueta | Retorna los elementos de la etiqueta dada                                      | document.querySelectorAll('h1')           |
| Por Clase        | Retorna los elementos con la clase dada                                        | document.querySelectorAll('.nombreClase') |
| Por id           | Retorna los elementos con el id dado                                           | document.querySelectorAll('#id')          |
| Por Atributo     | Retorna los elementos que cumplan con el atributo dado                         | document.querySelectorAll('[autoplay]')   |
| Agrupados        | Retorna los elementos que cumplan cada condición separada por ,                | document.querySelectorAll('div, #Titulo') |

Cabe destacar que todos los argumentos independiente del tipo de selector que se utilice soporta expresiones regulares para por ejemplo traer todos los elementos cuyo id empiece por Titulo.

Hay muchisimos selectores, los mismos que para CSS, estos son los mas utilizados pero si quieres investigarlos todos puedes hacerlo usando el siguiente [enlace](https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/).

## Ejercicio practico

Realicemos un ejercicio donde movamos un circulo sobre la pantalla utilizando las teclas del teclado.

Empecemos implementando lo necesario para colocar un circulo en la mitad de nuestra pantalla, lo pondremos color rojo para que se vea bastante.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div
      id="circle"
      style="
                width: 30px;
                height: 30px;
                border: 5px solid red;
                border-radius: 20px;
                position: absolute;
                right: 50vw;
                top: 50vh;
            "
    ></div>
  </body>
</html>
```

Así obtendremos un circulo rojo en el medio de nuestra pantalla, ahora agreguemos el evento necesario para detectar cuando se presione alguna tecla.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body onkeypress="pressedKey(event)">
    <div
      id="circle"
      style="
                width: 30px;
                height: 30px;
                border: 5px solid red;
                border-radius: 20px;
                position: absolute;
                right: 50vw;
                top: 50vh;
            "
    ></div>

    <script>
      const circle = document.querySelector("#circle");
      function pressedKey(event) {
        console.log(event);
        alert("Pressed key");
      }
    </script>
  </body>
</html>
```

Adicionalmente estamos tomando ya el circulo utilizando el identificador del div utilizado, ese parametro `event` que le pasamos a nuestra función es un parametro por defecto de todos los eventos el cual contiene toda la información del evento, por ejemplo, en este caso le estamos haciendo console.log, miremos que contiene esta variable para cuando presionamos la tecla `A`.

![Event](./resources/Event.png)

Como vemos contiene un objeto bastante extenso que en la primera linea podemos ver las propiedades que nos interesa, porque queremos mover nuestro circulo en la dirección deseada solo cuando se indique una dirección, entonces vemos que en la propiedad `key` del evento podemos obtener la tecla presionada, vamos a utilizar la convención A, W, S , D para mover nuestro circulo, entonces será hacia Izquierda, Arriba, Abajo y Derecha en el mismo orden de las teclas, miremos como lo haríamos.

```js
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body onkeypress="pressedKey(event)">
        <div
            id="circle"
            style="
                width: 30px;
                height: 30px;
                border: 5px solid red;
                border-radius: 20px;
                position: absolute;
                right: 50vw;
                top: 50vh;
            "
        ></div>

        <script>
            const circle = document.querySelector("#circle");
            function pressedKey(event) {
                console.log(event);
                const pressedKey = event.key.toLowerCase();
                switch (pressedKey) {
                    case "a":
                        console.log("a");
                        break;
                    case "w":
                        console.log("w");
                        break;
                    case "s":
                        console.log("s");
                        break;
                    case "d":
                        console.log("d");
                        break;
                }
            }
        </script>
    </body>
</html>
```

Aplicamos una función `toLowerCase()` a la letra para no tener problemas con si el teclado tiene el bloqueo de mayusculas o no, luego implementamos un case donde dependiendo de la tecla presionada hacemos una tarea, el case no tiene default pues en caso de que no sea ninguna de las teclas esperadas, no deseamos hacer nada.

Finalmente, en un elemento con posición absolute se ubica según sus propiedades de estilo `top` y `right` entonces esto es lo que debemos modificar para cambiar su posición en la pagina, hagamoslo.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body onkeypress="pressedKey(event)">
    <div
      id="circle"
      style="
                width: 30px;
                height: 30px;
                border: 5px solid red;
                border-radius: 20px;
                position: absolute;
                right: 50vw;
                top: 50vh;
            "
    ></div>

    <script>
      const circle = document.querySelector("#circle");
      function pressedKey(event) {
        const pressedKey = event.key.toLowerCase();
        switch (pressedKey) {
          case "d":
            circle.style.right = `${circle.style.right.split("vw")[0] - 1}vw`;
            break;
          case "w":
            circle.style.top = `${circle.style.top.split("vh")[0] - 1}vh`;
            break;
          case "s":
            circle.style.top = `${+circle.style.top.split("vh")[0] + 1}vh`;
            break;
          case "a":
            circle.style.right = `${+circle.style.right.split("vw")[0] + 1}vw`;
            break;
        }
      }
    </script>
  </body>
</html>
```

Como notamos utilizamos la propiedad style para acceder a las propiedades top y rigth, luego como estas nos retornan el valor explicito de la propiedad, es decir, por ejemplo para el estado inicial 50vh o 50vw usamos la función split para obtener el número y luego lo operamos dependiendo de lo esperado, sobre hacía donde mover el circulo, finalmente lo concatenamos con la unidad esperada, es decir, para anchos VW y para altos VH y le asignamos ese valor a la propiedad del elemento circle, el resultado final es un circulo que se mueve en pantalla según le indiquemos.

Si quisieramos cambiar por ejemplo la velocidad con la que se mueve en pantalla modificariamos la suma o resta que se le hace a la propiedad cada vez.

## Final del módulo

Llegamos al final de este modulo donde aprendimos mucho sobre la modificación del DOM de nuestras paginas utilizando Javascript, en siguientes modulos lo que nos queda es profundizar en implementaciones y buenas practicas de CSS y luego pasaremos a conceptos iniciales para herramientas mucho mas poderosas de Javascript.
