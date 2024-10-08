

-- Crear la tabla
CREATE TABLE "table_name";


-- alterar / modificar la tabla
ALTER TABLE authors
ADD full_name VARCHAR;

ALTER TABLE authors
RENAME full_name TO name;


-- Borrar datosd
TRUNCATE authors;


-- Borrar table
DROP TABLE authors;


-- insertar registros
INSERT INTO authors (name, birthdate) 
	VALUES ('Mario Bross', '1993-07-31');


-- actualizar registros
UPDATE authors
SET name = 'Mario Bross'
WHERE id = 13;


-- Borrar registros
DELETE FROM authors
WHERE id = 14;


-- Buscar registros
SELECT * FROM books;