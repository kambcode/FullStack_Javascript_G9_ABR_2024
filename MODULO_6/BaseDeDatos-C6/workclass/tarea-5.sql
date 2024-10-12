-- Reporte 1: Usar INNER JOIN para seleccionar los títulos de los libros junto con el nombre de su editorial.


SELECT * FROM book;

SELECT * FROM publisher;


SELECT * FROM book
JOIN publisher ON book.publisher_id = publisher.publisher_id;



SELECT b.title AS book_title, p.name AS publisher_name
FROM book AS b
INNER JOIN publisher AS p ON b.publisher_id = p.publisher_id;


-- Reporte 3: Usar RIGHT JOIN para seleccionar todos los libros y los nombres de los autores que los han escrito,
-- incluyendo libros que no tienen autores asociados.


SELECT b.title, ba.author_id, a.name 
FROM book AS b
RIGHT JOIN book_author AS ba ON b.book_id = ba.book_id
RIGHT JOIN author AS a ON a.author_id = ba.author_id;


-- Reporte 5:

Similar reporte 3 , dos inner Join 
luego un filtro usando where  y una subconsulta ( Group BY - Having COUNT() > 1 )

