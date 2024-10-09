---- 1
-- Seleccionar los nombres de los autores que han escrito al menos un libro;


SELECT * FROM authors;


SELECT name FROM authors
WHERE id IN (
	SELECT author_id FROM books
);


SELECT author_id FROM books;
-- 16, 17, 17, 18, 19, 20

--- 2
-- Contar cuantos prestamos han hecho los miembros que se unieron despues del año 2021

SELECT * FROM loans;
SELECT * FROM members;

SELECT name, 
	( SELECT COUNT(*) 
		FROM loans 
		WHERE member_id = members.id
) AS total_loans
FROM members
WHERE join_date > '2021-12-31';

-- 7 8 
SELECT * FROM members
WHERE join_date > '2021-12-31';

------   


-----3
--- Buscar el nombre del autor que tiene el mayor numero de libros publicados;


SELECT name, id 
FROM authors
WHERE id = (
	SELECT author_id FROM books
	GROUP BY author_id
	ORDER BY COUNT(*) DESC
	LIMIT 1
);


SELECT author_id FROM books
GROUP BY author_id
ORDER BY COUNT(*) DESC
LIMIT 1;



