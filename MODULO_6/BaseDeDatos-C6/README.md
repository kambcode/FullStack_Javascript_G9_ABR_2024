# Repaso: Creación de una API REST con Express usando Arrays en Memoria

## Introducción
Una API (Interfaz de Programación de Aplicaciones) REST es un conjunto de reglas que permite la comunicación entre diferentes sistemas a través de HTTP. REST (Representational State Transfer) es un estilo de arquitectura que utiliza las operaciones estándar de HTTP para realizar las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en los recursos.

En esta clase, repasaremos cómo crear una API REST utilizando Express, un framework para Node.js, y almacenaremos los datos en arrays en memoria.

## Instalación de Express
Para comenzar, necesitamos instalar Express en nuestro proyecto de Node.js. Para ello, seguimos los siguientes pasos:

1. Crear un nuevo proyecto de Node.js:
    ```sh
    mkdir myapi
    cd myapi
    npm init -y
    ```

2. Instalar Express:
    ```sh
    npm install express
    ```

## Configuración Básica de Express
Configuramos un servidor básico de Express que escuche en un puerto específico.

```js
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

## Creación de Rutas para la API
Vamos a crear una API para gestionar películas y directores. Cada película y director tendrá las siguientes propiedades:

### Películas
- `id` (number): Identificador único de la película.
- `title` (string): Título de la película.
- `directorId` (number): Identificador del director.
- `genre` (string): Género de la película.
- `releaseYear` (number): Año de estreno.

### Directores
- `id` (number): Identificador único del director.
- `name` (string): Nombre del director.
- `nationality` (string): Nacionalidad del director.

### Arrays en Memoria
Utilizaremos dos arrays en memoria para almacenar las películas y directores.

```js
let movies = [
  {
    id: 1,
    title: "Inception",
    directorId: 1,
    genre: "Sci-Fi",
    releaseYear: 2010
  },
  {
    id: 2,
    title: "Interstellar",
    directorId: 1,
    genre: "Sci-Fi",
    releaseYear: 2014
  }
];

let directors = [
  {
    id: 1,
    name: "Christopher Nolan",
    nationality: "British-American"
  },
  {
    id: 2,
    name: "Quentin Tarantino",
    nationality: "American"
  }
];
```

### Rutas de la API

#### Obtener Todas las Películas
```js
app.get('/movies', (req, res) => {
  res.json(movies);
});
```

#### Obtener una Película por su ID
```js
app.get('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('Movie not found');
  res.json(movie);
});
```

#### Agregar una Nueva Película
```js
app.post('/movies', (req, res) => {
  const movie = {
    id: movies.length + 1,
    title: req.body.title,
    directorId: req.body.directorId,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear
  };
  movies.push(movie);
  res.status(201).json(movie);
});
```

#### Actualizar una Película Existente
```js
app.put('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('Movie not found');

  movie.title = req.body.title;
  movie.directorId = req.body.directorId;
  movie.genre = req.body.genre;
  movie.releaseYear = req.body.releaseYear;

  res.json(movie);
});
```

#### Eliminar una Película
```js
app.delete('/movies/:id', (req, res) => {
  const movieIndex = movies.findIndex(m => m.id === parseInt(req.params.id));
  if (movieIndex === -1) return res.status(404).send('Movie not found');

  const deletedMovie = movies.splice(movieIndex, 1);
  res.json(deletedMovie[0]);
});
```

## Manejo de Errores
Es importante manejar adecuadamente los errores en nuestra API. Por ejemplo, si una película no se encuentra, debemos devolver un código de estado `404` (Not Found).

```js
app.get('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('Movie not found');
  res.json(movie);
});
```

De manera similar, debemos manejar otros tipos de errores, como solicitudes inválidas (`400 Bad Request`).

## Validaciones
Podemos agregar validaciones para asegurarnos de que los datos ingresados por el usuario sean correctos.

Por ejemplo, al agregar o actualizar una película, podemos verificar que todos los campos necesarios estén presentes y sean válidos.

```js
app.post('/movies', (req, res) => {
  if (!req.body.title || !req.body.directorId || !req.body.genre || !req.body.releaseYear) {
    return res.status(400).send('All fields are required');
  }

  const movie = {
    id: movies.length + 1,
    title: req.body.title,
    directorId: req.body.directorId,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear
  };
  movies.push(movie);
  res.status(201).json(movie);
});
```

## Pruebas de la API
Para probar nuestra API, podemos utilizar herramientas como Postman o curl para enviar solicitudes HTTP y verificar que las rutas funcionen correctamente.

## Conclusión
En esta clase, hemos repasado cómo crear una API REST con Express, utilizando arrays en memoria para almacenar la información. Hemos cubierto las operaciones CRUD básicas, manejo de errores y validaciones, proporcionando una base sólida para el desarrollo de APIs más complejas en el futuro.
