-- INNER JOIN --

SELECT * FROM books
INNER JOIN authors ON books.author_id = authors.id;

SELECT * FROM authors;


SELECT l.id AS loan_id, m.id AS member_id
FROM loans AS l
INNER JOIN members AS m ON l.member_id = m.id;


SELECT *
FROM loans AS l
JOIN members AS m ON l.member_id = m.id;


-- LEFT JOIN --


SELECT * 
FROM books
LEFT JOIN loans ON books.id = loans.book_id;


SELECT *
FROM books
LEFT JOIN loans ON loans.book_id = books.id;


--  Seleccionar todos los miembros y los libros que han sido prestados, mostrando tambien aquellos
--  que no han sido prestados

SELECT *
FROM members
LEFT JOIN loans ON members.id = loans.member_id
LEFT JOIN books ON loans.book_id = books.id;



-- RIGHT JOIN ---
SELECT *
FROM books
RIGHT JOIN loans ON loans.book_id = books.id;


SELECT 
FROM loans
RIGHT JOIN books ON books.id = loans.book_id;


SELECT *
FROM loans
RIGHT OUTER JOIN books ON loans.book_id = books.id;

-- FULL JOIN --


SELECT * FROM books
FULL OUTER JOIN authors ON books.author_id = authors.id;




-- SELF JOIN / Auto JOIN ---

SELECT * FROM books;

SELECT a.title, b.author_id, a.id
FROM books AS b
JOIN books AS a ON  a.id = b.author_id;


