
--DDL

CREATE TABLE IF NOT EXISTS authors (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	bithdate DATE NOT NULL
);

CREATE TABLE books (
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
	publication_year INTEGER,
	author_id INTEGER,
	CONSTRAINT fkAuthor_id
		FOREIGN KEY(author_id)
			REFERENCES authors(id)
);

CREATE TABLE members (
	id SERIAL PRIMARY KEY,
	name VARCHAR(200) NOT NULL,
	join_date TIMESTAMP DEFAULT NOW()
);


CREATE TABLE loans (
	id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	book_id INTEGER REFERENCES books(id),
	member_id INTEGER REFERENCES members(id),
	loan_date DATE NOT NULL,
	return_date DATE
);

-- DELETE
DROP TABLE loans;


