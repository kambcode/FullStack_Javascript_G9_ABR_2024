INSERT INTO authors (name, birthdate) VALUES 
('George Orwell', '1903-06-25'),
('J.K. Rowling', '1965-07-31'),
('Isaac Asimov', '1920-01-02'),
('Agatha Christie', '1890-09-15'),
('Mark Twain', '1835-11-30');



INSERT INTO books (title, publication_year, author_id) VALUES 
('1984', 1949, 1),
('Harry Potter and the Sorcerer''s Stone', 1997, 2),
('Harry Potter and the Chamber of Secrets', 1998, 2),
('Foundation', 1951, 3),
('Murder on the Orient Express', 1934, 4),
('The Adventures of Tom Sawyer', 1876, 5);

INSERT INTO members (name, join_date) VALUES 
('John Smith', '2020-01-15'),
('Mary Johnson', '2021-03-22'),
('James Williams', '2021-06-05'),
('Patricia Brown', '2022-08-30'),
('Michael Davis', '2023-02-12');

INSERT INTO loans (book_id, member_id, loan_date, return_date) VALUES 
(1, 1, '2023-09-01', '2023-09-15'),
(2, 2, '2023-08-10', '2023-08-24'),
(3, 3, '2023-09-05', NULL),
(4, 4, '2023-08-15', '2023-08-30'),
(5, 5, '2023-09-10', NULL);  
