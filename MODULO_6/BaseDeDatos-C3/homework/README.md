# Tarea: Creación de Tablas y Relaciones en SQL

## Descripción de la Tarea
La tarea consiste en generar las sentencias SQL para crear las tablas y relaciones correspondientes a un modelo entidad-relación, y luego insertar datos de ejemplo en las tablas.

## Modelo Entidad-Relación
El modelo entidad-relación a utilizar es el siguiente:

### Entidades y Atributos

1. **Author**
   - `Author_ID`: INTEGER, PRIMARY KEY
   - `Name`: VARCHAR(100)
   - `Nationality`: VARCHAR(50)

2. **Book**
   - `Book_ID`: INTEGER, PRIMARY KEY
   - `Title`: VARCHAR(100)
   - `Genre`: VARCHAR(50)
   - `Publication_Year`: INTEGER

3. **Publisher**
   - `Publisher_ID`: INTEGER, PRIMARY KEY
   - `Name`: VARCHAR(100)
   - `Country`: VARCHAR(50)

4. **Book_Author** (entidad de relación para la relación muchos a muchos entre Book y Author)
   - `Book_ID`: INTEGER, FOREIGN KEY
   - `Author_ID`: INTEGER, FOREIGN KEY

### Relaciones

- Un autor puede escribir uno o más libros, y un libro puede tener uno o más autores (relación muchos a muchos).
- Un libro puede ser publicado por un único editor, y un editor puede publicar uno o más libros (relación uno a muchos).

## Puntos de la Tarea

1. **Punto 1: Crear Tablas**
   - Generar las sentencias SQL para crear las tablas `Author`, `Book`, `Publisher` y `Book_Author`, incluyendo la definición de llaves primarias y foráneas.

2. **Punto 2: Insertar Datos**
   - Insertar datos de ejemplo en las tablas creadas utilizando sentencias `INSERT INTO`. Los datos de ejemplo se proporcionan a continuación.

### Datos de Ejemplo

#### Author
| Author_ID | Name          | Nationality |
|-----------|---------------|-------------|
| 1         | George Orwell | British     |
| 2         | Jane Austen   | British     |
| 3         | Mark Twain    | American    |

#### Book
| Book_ID | Title                        | Genre      | Publication_Year | Publisher_ID |
|---------|------------------------------|------------|------------------|--------------|
| 1       | 1984                         | Dystopian  | 1949             | 1            |
| 2       | Pride and Prejudice          | Romance    | 1813             | 2            |
| 3       | Adventures of Huckleberry Finn | Adventure  | 1884             | 1            |

#### Publisher
| Publisher_ID | Name                    | Country        |
|--------------|-------------------------|----------------|
| 1            | Penguin Books           | United Kingdom |
| 2            | Oxford University Press | United Kingdom |

#### Book_Author
| Book_ID | Author_ID |
|---------|-----------|
| 1       | 1         |
| 2       | 2         |
| 3       | 3         |

## Instrucciones
1. **Crear Tablas**: Escribir las sentencias SQL para crear las tablas y definir las relaciones uno a muchos y muchos a muchos según el modelo entidad-relación proporcionado.
2. **Insertar Datos**: Utilizar las sentencias `INSERT INTO` para insertar los datos de ejemplo en las tablas.
3. **Entrega**: Los estudiantes deben subir sus scripts SQL ( archivo extension .SQL) al repositorio de GitHub.
