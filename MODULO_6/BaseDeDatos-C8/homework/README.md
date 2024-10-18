# Tarea clase 8: Mejora de la API de Biblioteca de Música con Express y Sequelize

## Objetivo

Mejorar la integración de la API con Express y SQL realizada la clase pasada, utilizando Sequelize para realizar operaciones CRUD en una base de datos PostgreSQL, definiendo modelos y utilizando los métodos `find`, `findAll`, `create`, `update`, y `destroy`.

## Prerrequisitos

- Tener una base de datos PostgreSQL creada previamente con las tablas `Songs` y `Artists` utilizadas en la tarea anterior (tarea de la clase 7).
- Las tablas deben estar pobladas con los datos de ejemplo proporcionados anteriormente.

## Datos de Ejemplo

### Tabla: Artists

| id | name           | bio                                                            | photoUrl                      |
|----|----------------|----------------------------------------------------------------|-------------------------------|
| 1  | The Beatles    | The Beatles were an English rock band formed in Liverpool.    | https://picsum.photos/id/1015/400/400 |
| 2  | Adele          | Adele is an English singer-songwriter known for her soulful voice. | https://picsum.photos/id/1016/400/400 |

### Tabla: Songs

| id | title               | artistId | releaseYear | duration | coverUrl                        |
|----|---------------------|----------|-------------|----------|---------------------------------|
| 1  | Hey Jude            | 1        | 1968        | 431      | https://picsum.photos/id/1018/400/400 |
| 2  | Let It Be           | 1        | 1970        | 243      | https://picsum.photos/id/1020/400/400 |
| 3  | Rolling in the Deep | 2        | 2010        | 228      | https://picsum.photos/id/1021/400/400 |
| 4  | Someone Like You    | 2        | 2011        | 284      | https://picsum.photos/id/1022/400/400 |
| 5  | Hello               | 2        | 2015        | 295      | https://picsum.photos/id/1023/400/400 |


## Instrucciones

1. **Mejorar la API para gestionar canciones y artistas**:
    - Definir modelos Sequelize para las entidades `Songs` y `Artists`. 
    - Definir las rutas necesarias para manejar las operaciones CRUD (Create, Read, Update, Delete) para canciones y artistas usando los métodos de Sequelize (`find`, `findAll`, `create`, `update`, `destroy`).

2. **Criterios de Aceptación**:
    - La API debe permitir agregar, obtener, actualizar y eliminar canciones y artistas.
    - Las operaciones de la base de datos deben realizarse utilizando Sequelize y sus métodos.
    - Manejar adecuadamente los errores y devolver respuestas apropiadas (por ejemplo, 404 para recursos no encontrados, 400 para solicitudes inválidas, etc.).


## Detalles de la API

### Entidades y Atributos

### Artistas
- **id**: Número entero, identificador único del artista.
- **name**: Cadena de caracteres, nombre del artista.
- **bio**: Texto largo, biografía del artista.
- **photoUrl**: Cadena de caracteres, URL de la foto del artista.

### Canciones
- **id**: Número entero, identificador único de la canción.
- **title**: Cadena de caracteres, título de la canción.
- **artistId**: Número entero, identificador del artista (clave foránea).
- **releaseYear**: Número entero, año de lanzamiento de la canción.
- **duration**: Número entero, duración de la canción en segundos.
- **coverUrl**: Cadena de caracteres, URL de la portada del álbum.

### Rutas de la API

- **POST /songs**: Crear una nueva canción.
- **GET /songs**: Obtener todas las canciones.
- **PUT /songs/:id**: Actualizar una canción existente.
- **DELETE /songs/:id**: Eliminar una canción existente.
- **POST /artists**: Crear un nuevo artista.
- **GET /artists**: Obtener todos los artistas.
- **PUT /artists/:id**: Actualizar un artista existente.
- **DELETE /artists/:id**: Eliminar un artista existente.

## Entrega

- Subir el código a un repositorio en GitHub.
- Asegurarse de que la API esté documentada y de incluir instrucciones claras sobre cómo ejecutar el proyecto.
