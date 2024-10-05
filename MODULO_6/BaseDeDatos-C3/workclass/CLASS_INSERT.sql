
-- DML

-- INSERT

INSERT INTO authors (name, birthdate)
	VALUES 
	('George Orwell', '1903-07-31'),
	('Juanito', '1993-07-31');


SELECT * FROM authors;



INSERT INTO books 
	(title, publication_year, author_id )
	VALUES 
	('Cien años de soledad', 1967, 10),
	('Harry Potter I', 1997, 11),
	('Harry Potter IV', 2008, 11),
	('Juanito Aventuras', 2024, 13);


SELECT * FROM books;




INSERT INTO members (name)
	VALUES 
		('Juana de Arco');


SELECT * FROM members;



INSERT INTO loans 
	(book_id, member_id, loan_date, return_date)
	VALUES
	(1, 1, '2023-04-01', '2023-05-01'),
	(2, 3, '2023-04-01', '2023-07-25'),
	(3, 2, '2024-10-25', null),
	(1, 2, '2023-05-05', null);


SELECT * FROM loans;
