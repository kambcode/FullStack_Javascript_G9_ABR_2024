# Tarea: Practicando JOINs en SQL

## Descripción de la Tarea
La tarea consiste en generar una serie de reportes utilizando distintos tipos de JOINs para combinar información de varias tablas y practicar la integración de datos.

## Prerrequisitos
Para completar esta tarea, los estudiantes deben tener acceso a una base de datos con la estructura y los datos de prueba proporcionados en el archivo `database_dump.sql`.

## Puntos de la Tarea

1. **Punto 1: Generar Reportes con JOINs**
    - **Reporte 1**: Usar `INNER JOIN` para seleccionar los títulos de los libros junto con el nombre de su editorial.
    - **Reporte 2**: Usar `LEFT JOIN` para seleccionar todos los autores y los títulos de los libros que han escrito, incluyendo autores que no han escrito ningún libro.
    - **Reporte 3**: Usar `RIGHT JOIN` para seleccionar todos los libros y los nombres de los autores que los han escrito, incluyendo libros que no tienen autores asociados.
    - **Reporte 4**: Usar una combinación de `INNER JOIN` y `LEFT JOIN` para seleccionar todos los libros, sus autores, y la editorial, incluyendo libros que no tienen autores y aquellos sin editorial.
    - **Reporte 5**: Usar `INNER JOIN` para seleccionar todos los libros que han sido escritos por más de un autor y mostrar el título del libro junto con los nombres de los autores.
    - **Reporte 6 (Opcional)**: Usar `INNER JOIN`, `LEFT JOIN`, y `GROUP BY` para seleccionar la editorial que tiene más libros publicados, junto con el número total de libros y los títulos de esos libros.

## Instrucciones
1. **Generar Reportes con JOINs**: Escribir las sentencias SQL para generar los reportes solicitados utilizando los JOINs indicados.
2. **Entrega**: Los estudiantes deben subir sus scripts SQL a un repositorio de GitHub o enviarlos como un archivo comprimido.
