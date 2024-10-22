# Proyecto Final: API y Frontend de Gestión de Películas

### Objetivo

Crear una aplicación web completa que permita gestionar una colección de películas. Los estudiantes desarrollarán una API utilizando Express y Sequelize, y un frontend utilizando React.

### Descripción del Proyecto

Los estudiantes deben desarrollar una API que permita realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una base de datos de películas. Además, deben crear un frontend que interactúe con esta API para permitir a los usuarios gestionar la colección de películas.

### Prerequisitos

- Base de datos PostgreSQL creada con las siguientes tablas:
  - **Movies**
    - `id`: Número entero, clave primaria, autoincremental.
    - `title`: Cadena de texto, el título de la película.
    - `director`: Cadena de texto, el director de la película.
    - `releaseYear`: Número entero, el año de lanzamiento de la película.
    - `genre`: Cadena de texto, el género de la película.
  - **Actors**
    - `id`: Número entero, clave primaria, autoincremental.
    - `name`: Cadena de texto, el nombre del actor.
    - `birthYear`: Número entero, el año de nacimiento del actor.
  - **MovieActors**
    - `movieId`: Número entero, clave foránea que referencia a `Movies`.
    - `actorId`: Número entero, clave foránea que referencia a `Actors`.

### Instrucciones del Proyecto

1. **Configuración del Backend**
   - Crea un proyecto de Node.js e instala Express y Sequelize.
   - Configura Sequelize para conectar con la base de datos PostgreSQL.
   - Define los modelos de `Movie`, `Actor`, y `MovieActor` en Sequelize.
   - Establece las relaciones entre los modelos:
     - `Movie` tiene muchos `Actor` a través de `MovieActor`.
     - `Actor` tiene muchos `Movie` a través de `MovieActor`.

2. **Implementación de la API**
   - Crea las rutas para las siguientes operaciones:
     - **Movies**
       - `GET /movies`: Obtener todas las películas.
       - `GET /movies/:id`: Obtener una película por ID.
       - `POST /movies`: Crear una nueva película.
       - `PUT /movies/:id`: Actualizar una película por ID.
       - `DELETE /movies/:id`: Eliminar una película por ID.
     - **Actors**
       - `GET /actors`: Obtener todos los actores.
       - `GET /actors/:id`: Obtener un actor por ID.
       - `POST /actors`: Crear un nuevo actor.
       - `PUT /actors/:id`: Actualizar un actor por ID.
       - `DELETE /actors/:id`: Eliminar un actor por ID.
     - **MovieActors**
       - `POST /movies/:movieId/actors/:actorId`: Añadir un actor a una película.
       - `DELETE /movies/:movieId/actors/:actorId`: Eliminar un actor de una película.

3. **Configuración del Frontend**
   - Crea un proyecto de React.
   - Configura React Router para la navegación entre las páginas de la aplicación.
   - Crea componentes para las siguientes vistas:
     - **Lista de Películas**: Muestra todas las películas en la base de datos.
     - **Detalle de Película**: Muestra los detalles de una película específica y su elenco.
     - **Formulario de Película**: Permite crear o editar una película.
     - **Lista de Actores**: Muestra todos los actores en la base de datos.
     - **Formulario de Actor**: Permite crear o editar un actor.
   - Implementa la lógica para interactuar con la API desde el frontend utilizando fetch o axios.

4. **Estilización**
   - Estiliza la aplicación utilizando CSS o una librería de estilización de tu elección.
   - Asegúrate de que la aplicación sea responsive y fácil de usar.

### Descripción del Diseño

#### Páginas Incluidas

1. **Página de Inicio**
   - Barra de navegación con enlaces a "Películas" y "Actores".
   - Vista general de las películas más populares.

2. **Lista de Películas**
   - Tabla/lista de todas las películas con opciones para ver, editar y eliminar cada película.
   - Botón para añadir una nueva película.

3. **Detalle de Película**
   - Muestra los detalles de una película específica, incluyendo título, director, año de lanzamiento y género.
   - Lista de actores asociados a la película.
   - Botones para editar o eliminar la película.

4. **Formulario de Película**
   - Formulario para crear o editar una película.
   - Campos para título, director, año de lanzamiento y género.
   - Opción para seleccionar actores asociados a la película.

5. **Lista de Actores**
   - Tabla/lista de todos los actores con opciones para ver, editar y eliminar cada actor.
   - Botón para añadir un nuevo actor.

6. **Formulario de Actor**
   - Formulario para crear o editar un actor.
   - Campos para nombre y año de nacimiento.

### Entregables

- Código fuente del backend y del frontend.
- Instrucciones para ejecutar la aplicación localmente.
- Incluye un archivo `.sql` con las sentencias SQL usadas para crear la base de datos y poblar la misma
- Un archivo README.md detallando el proyecto y cualquier consideración especial.

### Recursos Adicionales

- **Documentación de Express**: [https://expressjs.com/](https://expressjs.com/)
- **Documentación de Sequelize**: [https://sequelize.org/](https://sequelize.org/)
- **Documentación de React**: [https://reactjs.org/](https://reactjs.org/)

