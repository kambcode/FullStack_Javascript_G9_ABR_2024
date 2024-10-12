-- HOMEWORK CLASE 4
--Reporte 1: Seleccionar todos los libros publicados por 'Penguin Books'.


SELECT * FROM book;


SELECT publisher_id FROM publisher
WHERE name = 'Penguin Books';


SELECT * 
FROM book
WHERE publisher_id = (
	SELECT publisher_id FROM publisher
	WHERE name = 'Penguin Books'
);

-- Reporte 5: Utilizando una subconsulta, seleccionar los títulos de los libros escritos por autores británicos.

SELECT * FROM book;


-- 1, 2, 4, 5
SELECT author_id FROM author
WHERE nationality = 'British';


-- 1, 4, 2, 5, 4, 5
SELECT book_id
FROM book_author
WHERE author_id IN (
	SELECT author_id 
	FROM author
	WHERE nationality = 'British'
);


SELECT title 
FROM book
WHERE book_id IN (
	SELECT book_id
	FROM book_author
	WHERE author_id IN (
		SELECT author_id 
		FROM author
		WHERE nationality = 'British'
	)
);