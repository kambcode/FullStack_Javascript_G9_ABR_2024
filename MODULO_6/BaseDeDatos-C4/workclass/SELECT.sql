-- QUERY QUERIES
SELECT * FROM authors;

SELECT name, birthdate 
	FROM authors;

SELECT * FROM authors
WHERE id = 13;

-- =  > <   BETWEEN  LIKE IN AND OR NOT

SELECT * FROM books
WHERE title = 'Harry Potter I';

SELECT * FROM books
WHERE publication_year > 1990;

SELECT * FROM books
WHERE publication_year < 2000;

SELECT * FROM books
WHERE publication_year BETWEEN 2000 AND 2020 ;


SELECT * FROM books
WHERE publication_year > 2000 AND publication_year < 2020;

SELECT * FROM books
WHERE publication_year > 2000 OR publication_year < 2020;


-- % _
SELECT * FROM books
WHERE title LIKE '%Potter%';

SELECT * FROM books
WHERE title LIKE 'Harry Potter__%';


SELECT * FROM books
WHERE author_id IN (10, 13);

SELECT * FROM authors
WHERE name IN ('Mario Bross', 'J.K Rowling');

-- ORDER BY ASC | DESC

SELECT * FROM books
ORDER BY publication_year DESC;

-- Agregaciones con FUNCIONES
-- COUNT() 
-- SUM()
-- AVG()  average
-- MAX()
-- MIN()

SELECT COUNT(*) FROM books;

SELECT SUM(id) FROM books;

SELECT AVG(id) FROM books;

SELECT MAX(id) FROM books;

SELECT MIN(id) FROM books;


SELECT MAX(publication_year) FROM books;

SELECT * FROM books;

-- GROUP BY 11 11 13
SELECT MAX(author_id) as author FROM books
GROUP BY publication_year

-- ALIAS AS

/*
-- HAVING

-- combinación con la clausula GROUP BY, filas donde la condicion es verdadera

-- SELECT field, condicion -> funcion -> FROM -> GROUP BY field-> HAVING condicion

*/

SELECT publication_year, COUNT(*) AS total_years
FROM books
GROUP BY publication_year
HAVING publication_year < 2;





-- SubCOnsultas

SELECT * FROM public.authors
ORDER BY id ASC;


SELECT * FROM books;

SELECT * FROM books
WHERE author_id IN (10, 11);


SELECT id FROM authors
WHERE name IN ('Gabriel Garcia Marquez', 'J.K Rowling');

SELECT * FROM books
WHERE author_id IN (
	SELECT id FROM authors
	WHERE name IN ('Gabriel Garcia Marquez', 'J.K Rowling')
);
