-- Creamos tabla user con nombre, edad, genero y fecha de cumple del usuario
-- La creamos con sentencia IF NOT EXISTS para evitar errores si ya ha sido creada.
CREATE TABLE IF NOT EXISTS tblUser (
	id serial PRIMARY KEY,
	name varchar(250) NOT NULL,
	age integer NOT NULL,
	gender varchar(250) NOT NULL,
	birthdate date NOT NULL
);

-- Creamos tabla City con solo el id de la ciudad y el nombre
-- La creamos con sentencia IF NOT EXISTS para evitar errores si ya ha sido creada.
CREATE TABLE IF NOT EXISTS tblCity (
	id serial PRIMARY KEY,
	name varchar(250) NOT NULL
);

-- Creamos tabla intermedia UserCity donde vamos a almacenar la relación entre la tabla User y City
-- como vemos utilizamos los constraint para indicar que los identificadores de usuario y ciudad
-- son llaves foraneas de sus respectivas tablas
-- La creamos con sentencia IF NOT EXISTS para evitar errores si ya ha sido creada.
CREATE TABLE IF NOT EXISTS tblUserCity (
	id serial PRIMARY KEY,
	idUser int NOT NULL, 
	idCity int NOT NULL,
	CONSTRAINT fkIdUser
		FOREIGN KEY(idUser)
			REFERENCES tblUser(id),
	CONSTRAINT fkIdCity
		FOREIGN KEY(idCity)
			REFERENCES tblCity(id)
);

-- Creamos tabla Country solo con el nombre
-- La creamos con sentencia IF NOT EXISTS para evitar errores si ya ha sido creada.
CREATE TABLE IF NOT EXISTS tblCountry (
	id serial PRIMARY KEY,
	name varchar(250) NOT NULL
);

-- Al igual que UserCity creamos CityCountry para relacionar las ciudades con sus respectivos países
-- en este caso generamos las mismas reglas para las llaves foraneas
-- La creamos con sentencia IF NOT EXISTS para evitar errores si ya ha sido creada.
CREATE TABLE IF NOT EXISTS tblCityCountry (
	id serial PRIMARY KEY,
	idCountry int NOT NULL,
	idCity int NOT NULL,
	CONSTRAINT fkIdCountry
		FOREIGN KEY(idCountry)
			REFERENCES tblCountry(id),
	CONSTRAINT fkIdCity
		FOREIGN KEY(idCity)
			REFERENCES tblCity(id)
);