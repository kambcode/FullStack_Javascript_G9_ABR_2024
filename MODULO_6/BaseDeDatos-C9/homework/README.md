# Tarea: Mejora de la API de Biblioteca de Música con Express y Sequelize

## Objetivo

El objetivo de esta tarea es que los estudiantes practiquen la creación de una API utilizando Express y Sequelize, enfocándose en la definición de relaciones entre modelos y en la implementación de endpoints que realicen queries utilizando dichas relaciones.

## Prerequisitos

1. Debes tener una base de datos PostgreSQL creada previamente con las tablas `Artists` y `Songs` utilizadas en la tarea anterior.
2. Las tablas deben tener datos de ejemplo. A continuación, se proporciona la estructura de las tablas y los datos de ejemplo.

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

Tomando la tarea creada en la clase anterior agrega las siguientes relaciones a los modelos y crea las siguientes rutas:

1. **Definición de Modelos**
    - Define la relación "uno a muchos" (`One-to-Many`) entre `Artist` y `Song`. Cada artista puede tener muchas canciones, pero cada canción pertenece a un único artista.

2. **Nuevas Rutas de la API**
    - Implementa las siguientes rutas adicionales para gestionar los `Artists` y `Songs` utilizando los métodos de Sequelize (`findAll`, `findByPk`, etc):
        - **GET /artists/:id/songs**: Obtener todas las canciones de un artista (query utilizando la relación).
        - **GET /songs-with-artists**: Obtener todas las canciones con sus respectivos artistas (query utilizando la relación).
        - **GET /songs/artist/:artistId**: Obtener todas las canciones de un artista específico (query utilizando la relación).
        - **GET /artists-by-song-duration/:duration**: Obtener todos los artistas que tienen canciones con una duración específica o mayor, mostrando también la información de las canciones (query utilizando la relación).

4. **Criterios de Aceptación**
    - La API debe estar configurada y funcionando con Express y Sequelize.
    - Los modelos `Artist` y `Song` deben estar definidos correctamente con sus relaciones correspondientes.
    - Todas las rutas especificadas deben estar implementadas y funcionando.
    - Debes realizar pruebas de cada una de las rutas utilizando herramientas como Postman o Insomnia para asegurarte de que la API responde correctamente a las solicitudes.
