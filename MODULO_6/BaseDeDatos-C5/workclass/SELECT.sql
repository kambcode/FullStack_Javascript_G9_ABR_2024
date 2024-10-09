
-- CONCAT
-- CASE
-- LIMIT / OFFSET

SELECT * FROM books;

-- DISTINCT
SELECT DISTINCT author_id FROM books;

-- CONCAT
SELECT title || ' año de lanzamiento: ' || publication_year AS description FROM books;

-- CASE
SELECT *,
CASE
	WHEN publication_year > 1950 AND publication_year < 1990 THEN 'Este libro fue lanzado luego del año 1950'
	WHEN publication_year >= 1990 THEN 'Este libro fue lanzado luego del año 1990'
	ELSE 'El libro fue lanzado antes del año 1950'
END AS release
FROM books;


-- LIMIT OFFSET

SELECT * FROM books
LIMIT 2 OFFSET 4;
