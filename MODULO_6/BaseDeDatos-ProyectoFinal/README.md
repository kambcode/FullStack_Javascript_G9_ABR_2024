# Proyecto Final: API y Frontend de Gestión de Canciones y Artistas

## Descripción del Proyecto

En este proyecto final, deberás desarrollar una aplicación web que gestione artistas y canciones utilizando Express y Sequelize para la API y React para el frontend. La base de datos ya está definida y los datos deben ser gestionados a través de la API. Tu aplicación debe permitir a los usuarios interactuar con la base de datos mediante una interfaz amigable y funcional.

## Descripción del Diseño

### Diseño de la Interfaz

La interfaz de usuario debe ser intuitiva y permitir a los usuarios realizar las siguientes acciones:

1. **Ver la lista de artistas**: Mostrar una lista de todos los artistas con su nombre, foto y una breve biografía.
2. **Ver la lista de canciones**: Mostrar una lista de canciones con su título, artista, año de lanzamiento, duración y portada del álbum.
3. **Buscar y filtrar**: Permitir a los usuarios buscar artistas y canciones por nombre o filtro por género o año de lanzamiento.
4. **Detalles del artista**: Al seleccionar un artista, mostrar detalles completos del artista, incluyendo su foto, biografía y lista de canciones.
5. **Detalles de la canción**: Al seleccionar una canción, mostrar detalles completos de la canción, incluyendo título, artista, año de lanzamiento, duración y portada del álbum.
6. **Agregar, editar y eliminar**: Permitir la adición, edición y eliminación de artistas y canciones a través de formularios adecuados.

### Estilo

Utiliza un diseño limpio y moderno. Los elementos deben ser fáciles de leer y navegar. Los colores deben ser coherentes con el tema musical y el diseño debe ser responsivo para diferentes tamaños de pantalla.

## Requisitos del Proyecto

1. **API**:
   - Debe estar implementada utilizando Express y Sequelize.
   - Debe permitir CRUD completo para las entidades `Artist` y `Song`.
   - **Endpoints Requeridos**:
     - **Artistas**:
       - **GET /artists**: Obtener todos los artistas.
       - **GET /artists/:id**: Obtener un artista por ID.
       - **POST /artists**: Crear un nuevo artista.
       - **PUT /artists/:id**: Actualizar un artista por ID.
       - **DELETE /artists/:id**: Eliminar un artista por ID.
     - **Canciones**:
       - **GET /songs**: Obtener todas las canciones.
       - **GET /songs/:id**: Obtener una canción por ID.
       - **POST /songs**: Crear una nueva canción.
       - **PUT /songs/:id**: Actualizar una canción por ID.
       - **DELETE /songs/:id**: Eliminar una canción por ID.
       - **GET /songs/artist/:artistId**: Obtener todas las canciones de un artista específico.

2. **Frontend**:
   - Debe estar desarrollado utilizando React.
   - Debe interactuar con la API para realizar operaciones CRUD.
   - Debe permitir a los usuarios ver, agregar, editar y eliminar artistas y canciones.
   - Debe incluir un diseño claro y responsivo.

## Entidades y Atributos

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


## Entregables

1. Código fuente del backend y frontend.
2. Documentación de la API (puede ser generada automáticamente o escrita a mano).
3. Instrucciones para ejecutar la aplicación (backend y frontend).
4. Un archivo `.sql` con las sentencias SQL usadas para crear la base de datos y poblar la misma
5. Capturas de pantalla o una demostración en vivo de la aplicación.