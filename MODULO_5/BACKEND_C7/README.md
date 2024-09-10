# Backend

Este es nuestro primer modulo de backend propiamente, en este construiremos nuestro primer proyecto backend, miraremos cuales son sus componentes basicos y plantearemos una estructura estandar la cual es recomendada como buenas practicas para manejar un flujo de trabajo organizado, ya con todos los conceptos claros pasemos a mirar una de las librerías mas utilizadas para proyectos Backend NodeJS del mercado y librería en la que se basan muchisimos Frameworks, `express`.

## Express

`Express` o `express js` como es llamado comunmente es una librería o framework minimalista como es considerada por algunos cuyo fin es el de desarrollar servidores web de manera agil y eficiente, fue diseñada principalmente para el desarrollo de APIs pero también tiene funcionalidades para por ejemplo hacer templating de HTML server-side y demas que lo robustecen mas. En este caso nos enfocaremos en sus prestaciones para desarrollar servidores backend web para el desarrollo de nuestro API propuesta de ejercicio.

Muchisimos son los frameworks Backend desarrollados sobre express pues esta es la librería insignia de NodeJS, express a su vez está desarrollado sobre el mismo NodeJS, de aquí su eficiencia.

Como su principal ventaja se destaca lo ligera de esta librería lo que la hace super eficiente y permite desplegar servidores robustos perfectos para producción sin muchas configuraciones tediosas o en pocas lineas de código.

Su principal desventaja parte de su mayor fortaleza y es lo flexible que es, por esto no tiene un flujo de trabajo muy definido por lo que casi siempre resulta mas atractivo trabajarlo implementado en un framework por ahorrarnos configuraciones necesarias para plantear el modelo de trabajo o la estructura de un proyecto.

Para instalar `express` en un proyecto de NodeJS utilizamos el siguiente comando

```
$ npm install express
```

Con la ejecución de este comando bastará para poder iniciar con nuestro primer script del proyecto de `express`, miremos entonces una primera implementación.

```js
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
```

De esta manera definimos una variable `app` que sería nuestro servidor y también definimos un puerto, al ejecutar este script nuestro servidor estará escuchando en el puerto 3000 tal como lo intuimos de la linea donde se llama a `app.listen()`.

Ahora lo que sigue en la implementación del servidor es agregar las rutas para que nuestro servidor en base a la interacción con el usuario pueda ser consumido. Creemos una ruta de tipo `get` inicial.

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
```

Como podemos ver definimos una ruta `get` mediante la función `app.get()` esta toma dos parametros, el primero que es un string indicando la ruta y el segundo un `callback` con dos parametros, `req` y `res`, estos dos parametros son estandar para los callbacks de las funciones asociadas a rutas en `express` como lo veremos a detalle mas adelante, estos se refieren un objeto que representa el `request` para el caso de `req` y el `response` para el caso de `res`, en este caso solo utilizamos `res` y mediante el metodo `send` enviamos una respuesta. Miremos como consumimos esta ruta y su respuesta.

Usaremos Postman para los ejemplos donde consumimos nuestro API.

![Postman Hello World](./resources/PostmanHelloWorld.png)

Como notamos en la imagen la ruta configurada apunta a localhost:3000 que en este caso es el puerto donde está escuchando nuestro servidor porque así lo definimos, luego, al hacer una petición GET a la ruta `/` como vemos en la respuesta el servidor response 200 OK con la respuesta Hello World!.

De esta manera podemos definir nuestras rutas y consumirlas, miremos entonces ahora la estructura basica de un proyecto de express para entender mejor el como organizar nuestras rutas y por qué mientras miramos conceptos de express.

## Rutas

Al primer concepto que miraremos y que de hecho con la teoría anterior ya lo vimos, son las rutas, estas representan las diferentes respuestas que se manejan dependiendo del request del cliente.

Este tema ya lo vimos cuando miramos la implementación del modulo `http` de NodeJS. Express sin embargo tiene herramientas mas desarrolladas que nos facilitan la gestión de las rutas sin tener que llegar a utilizar los switch u otras estructuras para el manejo del flujo de nuestro código, miremos entonces como lo hacemos.

Express permite definir las rutas de nuestra aplicación haciendo uso del objeto `app` que ya vimos en el primer código ejemplo, este dispone de distintos metodos para definir las rutas dependiendo del metodo a utilizar, por ejemplo, en el primer caso que revisamos utilizabamos el metodo `get` para la ruta `/`. Miremos un ejemplo donde implementamos una ruta distinta.

En el mismo servidor que ya desarrollamos en el ejemplo pasado, incluyamos una nueva ruta de la siguiente manera.

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/ping", (req, res) => {
  //NUEVA RUTA
  res.send("Server PING success!");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
```

Como notamos para la nueva ruta en lugar de utilizar el metodo `get` utilizamos el metodo `post`, entonces miremos como consumirlo de Postman.

![](./resources/PostmanPingFail.png)

En este caso hacemos un metodo `GET` al endpoint o la ruta `localhost:3000/ping` que si está definida en nuestra API pero no con el metodo `GET`, por esto recibimos un error que indica que no hay ruta definida para dicha ruta y dicho tipo de petición, mas, si utilizamos un request `POST` desde Postman miremos el resultado.
![](./resources/PostmanPing.png)

Como vemos, para este caso la respuesta si es la esperada, la cual es un mensaje del servidor indicando que la conexión funciona correctamente.

Express soporta todos los metodos HTTP, adicionalmente si queremos definir un mismo comportamiento para una ruta dado cualquier tipo de petición podemos usar el metodo `all`, este por ejemplo es muy utilizado para definir `middlewares` a una ruta dada, esto lo miraremos mas adelante, por ahora miremos el ejemplo anterior pero con `all`.

```js
app.all("/ping", (req, res) => {
  res.send("Server PING success!");
});
```

En este caso al definir la ruta con `all` cualquier tipo de request que utilicemos sobre la ruta obtendrá el mismo resultado.

![](./resources/PostmanPingAll.png)

Para las rutas podemos utilizar expresiones regulares de manera de abarcar rutas definidas mediante cierto patrón, también al definir nuestras rutas es importante que tengamos en cuenta el hecho de que por ejemplo al utilizar el simbolo `$` en una ruta debemos indicarlo entre corchetes `[\$]` para que la ruta entienda que significa el caracter, consideraciones como esta y para expresiones regulares hay varias, por tanto no profundizaremos en este modulo en ellas, puedes leer sobre ellas [**aquí**](https://expressjs.com/en/guide/routing.html).

Hablemos entonces de otro concepto fundamental de la interacción e interpretación de las peticiones de nuestros usuarios y son los parametros, como lo vimos para el caso de http las peticiones soportan muchas maneras de enviar parametros las principales son mediante los `query params` y los `body params`.

Otra de las maneras es directamente sobre la ruta, `express` nos genera soporte para estos parametros de la siguiente manera, pensemos en que tenemos un arreglo de libros con la siguiente estructura.

```js
const books = [
  {
    bookId: 1,
    author: "Perano",
    name: "The hapiness book",
    gender: "Self Care",
  },
  {
    bookId: 2,
    author: "Sultano",
    name: "The blue man",
    gender: "Fantasy",
  },
  {
    bookId: 3,
    author: "Mendano",
    name: "How to build habits",
    gender: "Self Care",
  },
  {
    bookId: 4,
    author: "Mendano",
    name: "How to be rich",
    gender: "Self Care",
  },
];
```

Como notamos es un arreglo de libros con 3 propiedades cada uno, autor, nombre y genero. Pensemos que queremos desarrollar una ruta para consultar estos libros y queremos habilitar algunos filtros para la busqueda. Primero definamos el endpoint de la siguiente manera.

```js
app.get("/books", (req, res) => {
  res.send({
    status: 200,
    message: "Query executed successfully",
    data: books,
  });
});
```

Como notamos simplemente estamos definiendo una ruta de tipo `GET` en la cual retornamos el arreglo definido en un JSON con una estructura basica.

Luego, al hacer el request desde Postman al endpoint la respuesta se vería así.

![](./resources/GetBooks.png)

Ahora habilitemos algunos parametros de la ruta para definir filtros en nuesta busqueda, para definir que nuestra ruta va a recibir parametros en el mismo URI lo hacemos usando la sitanxis `:nombreParametro`, por ejemplo para el caso de nuestro endpoint si queremos definir un parametro para filtrar por id de libro que sea `bookId` sería de la siguiente manera.

```js
app.get("/books/:bookId", (req, res) => {
  console.log(req.params); // { bookId: '2' }
  res.send({
    status: 200,
    message: "Query executed successfully",
    data: books,
  });
});
```

Como notamos, utilizamos la notación mencionada, de esta manera por ejemplo al hacer un request `GET` al endpoint `localhost:3000/books/2` el objeto `req.params` tendrá un objeto con la llave `bookId: '2'` y podremos validar el parametro para saber que responder, vamos a generar una regla donde si el parametro es `all` entonces devolvemos todos los registros que tenemos. Miremos un ejemplo.

```js
app.get("/books/:bookName", (req, res) => {
  console.log(req.params); // {bookName: 'all'}
  if (req.params.bookName === "all") {
    res.send({
      status: 200,
      message: "Query executed successfully",
      data: books,
    });
  } else {
    const results = books.filter((book) => book.name === req.params.bookName);
    res.send({
      status: 200,
      message: "Query executed successfully",
      data: results,
    });
  }
});
```

Si enviamos entonces un request de la siguiente manera `localhost:3000/books/all` nos retornará la misma respuesta que la primera petición, el arreglo completo, luego, si enviamos un id de un libro nos retornará solo la información de ese libro, por ejemplo `localhost:3000/books/2` nos retorna lo siguiente

```
{
    "status": 200,
    "message": "Query executed successfully",
    "data": [
        {
            "bookId": 2,
            "author": "Sultano",
            "name": "The blue man",
            "gender": "Fantasy"
        }
    ]
}
```

También si queremos definir otra ruta donde filtremos por genero por ejemplo y por autor lo podemos hacer, por ejemplo, miremos el siguiente endpoint definido en express.

```js
app.get("/genders/:gender/authors/:author", (req, res) => {
  console.log(req.params);
  const results = books.filter(
    (book) =>
      book.gender == req.params.gender && book.author == req.params.author
  );
  res.send({
    status: 200,
    message: "Query executed successfully",
    data: results,
  });
});
```

En este caso filtramos por genero y autor, entonces al hacer un request por ejemplo con `localhost:3000/genders/Self%20Care/authors/Mendano` obtenemos lo siguiente.

```
{
    "status": 200,
    "message": "Query executed successfully",
    "data": [
        {
            "bookId": 3,
            "author": "Mendano",
            "name": "How to build habits",
            "gender": "Self Care"
        },
        {
            "bookId": 4,
            "author": "Mendano",
            "name": "How to be rich",
            "gender": "Self Care"
        }
    ]
}
```

> Notese la utilización del wildcard `%20` para representar el espacio en el parametro :gender

Otra manera de enviar parametros utilizada para metodos `GET` son los `queryParams`, estos se envían siguiendo una notación que por su flexibilidad es mas utilizada, miremos un ejemplo de un endpoint para retornar libros según su id.

```js
app.get("/booksQuery", (req, res) => {
  console.log(req.query); // { bookId: '3' }
});
```

Según el código de arriba, si realizamos la petición a al endpoint `localhost:3000/booksQuery?bookId=3` nos imprimirá el objeto comentado. Los query params son todo lo que va al final del endpoint, indicamos con un signo de pregunta `?` que lo que sigue son los queryParams, colocamos por pares `nombreLlave=Valor` y separamos los distintos query params con el simbolo `&`, entonces, por ejemplo si queremos enviar autor y gender como en el anterior ejercicio podemos hacerlo enviando los query params así: `localhost:3000/booksQuery?gender=Self Care&author=Mendano`.

Luego, según lo vimos en el módulo de HTTP para otros metodos donde es recomendado el uso de bodyParams, express por default nos permite manejar el body como queramos por lo que no implementa directamente ningun `parser` de body, es decir, tenemos que configurar la manera como vamos a leer el body de nuestras request, lo mas común es implementar el middleware de `express.json()`, los middlewares son la sección siguiente así que por ahora, insertemos en nuestro proyecto el siguiente fragmento de código.

```js
app.use(express.json());
```

Al hacerlo ahora dentro de nuestros handlers podemos acceder al objeto `app.body` el cual contiene el body de la petición, ahora escribamos por ejemplo un metodo post para agregar nuevos libros.

```js
app.post("/books", (req, res) => {
  console.log(req.body);
  books.push(req.body);
  res.json({
    status: 200,
    message: "Query executed successfully",
    inserted: req.body,
  });
});
```

Entonces ejecutemos un `POST` al endpoint `localhost:3000/books` con el siguiente body

```
{
    "bookId": 8,
    "author": "Isabel",
    "name": "The sun and the penguin",
    "gender": "Love"
}
```

Al ejecutar nuestro endpoint el leera el body y lo insertará en nuestro arreglo de libros por lo que ahora podremos acceder a el mediante metodos de obtención de libros.

Con estos temas vistos, ahora pasemos a mirar los middlewares antes de pasar a una implementación de un mini proyecto real de express.

## Middlewares

Las funciones middleware son funciones que tienen acceso a los objetos `req` y `res` y a la función utilizada para implementarlos `next()`, esta función lo que hace es delegar la ejecución de la tarea al siguiente metodo encargado pues el fin de los middlewares es ejecutar tareas antes, durante o despues de la ejecución del flujo normal de una respuesta de un endpoint.

Así entonces el concepto middleware es bastante amplio y abarca una gran cantidad de usos distintos que se le pueden dar a estas funciones, por ejemplo, en el ejercicio de `POST` de la sección pasada tuvimos que implementar un middleware utilizando `app.use()`, este middleware es un `parser` el cual nos ayuda a la gestión del body de los request, nos permite acceder a el desde req. Este es un ejemplo de uno de los infinitos usos de los middleware, miremos un ejemplo donde implementamos un middleware que creamos con el fin de generar Logs cada que se llame a un endpoint de nuestro API.

```js
app.use((req, res, next) => {
  console.log(
    `New Request: ${req.method} | ${
      req.originalUrl
    } | ${new Date().toISOString()}`
  );
  next();
});
```

La función anterior lo que hace es definir un middleware el cual como vemos tiene acceso a los objetos `req`, `res` y a la función `next()`, en este caso lo que hacemos es imprimir cierta información del `req` seguido de la hora actual en formato ISO con caracter informativo, al utilizar `app.use()` este middleware se ejecutará para todos los request que reciba el objeto app de cualquier tipo, podemos indicar tanto tipo de peticiones como rutas haciendo uso de un primer parametro. Muy importante notar al final del middleware el uso de la función `next()` la cual como mencionamos hace el flujo continuar, siempre la debemos utilizar cuando nuestro middleware no le de fin al procesado del request y envíe respuesta porque si no lo hacemos dejamos la petición inconclusa.

También podemos implementar middlewares sobre rutas definidas, miremos un ejemplo donde implementamos un middleware de validación sobre la ruta para crear nuevos libros.

```js
app.post("/books", (req, res, next) => {
  if (req.body.author && req.body.bookId && req.body.name && req.body.gender) {
    next();
  } else {
    res.json({ status: 400, message: "Error on given parameters" });
  }
});
```

De esta manera estamos validando que se envíen los parametros necesarios para crear un nuevo registro de libro, si se envían se continúa al procesado normal de la petición y si no se retorna error, este caso no sería un buen uso de middlewares, por lo general si requerimos de aplicar un middleware sobre un solo endpoint deberíamos pensar mejor en implementarlo directamente sobre el handler de la petición, la idea de los middlewares es que se implementen sobre al menos dos rutas de manera que valga la pena su implementación y no sea código basura.

Los usos de los middleware son infinitos, desde validar formatos de entrada hasta generar formatos de respuesta y de manejo de errores, podemos utilizar middlewares creados por terceros e implementarlos en nuestras API o crear los nuestros y definirlos.

## Ejemplo Practico

Ahora que tenemos claros los elementos basicos de express pasemos a un ejemplo practico donde miraremos una propuesta para la implementación de express, como lo mencionamos la flexibilidad de esta librería nos permite implementarla en la estructura que queramos, en este ejercicio se propondrá una y veremos el flujo completo de un CRUD de tareas o como las llamaremos `Todo`, miraremos el flujo desde su creación, obtención, actualización y eliminación y también implementaremos middlewares con autenticación.

## Final del módulo

Llegamos al final de este módulo donde vimos todos los fundamentos de express, ya con esta teoría tenemos todo listo para construir una aplicación de nivel productivo tipo API, en el siguiente modulo haremos la construcción del ejemplo practico descrito donde miraremos la utilización adecuada de los elementos base de express y miraremos una propuesta de estructuración del proyecto.
