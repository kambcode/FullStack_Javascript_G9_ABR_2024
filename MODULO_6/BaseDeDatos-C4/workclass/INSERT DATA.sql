-- Insertamos el país Colombia
INSERT INTO tblCountry(name) VALUES ('Colombia');
-- Insertamos la ciudad Medellín
INSERT INTO tblCity(name) VALUES ('Medellín');
-- Creamos la relación del país Colombia con la ciudad Medellín
INSERT INTO tblCityCountry(idCountry, idCity) VALUES (1, 1);
-- Creamos un nuevo usuario con todos sus datos
INSERT INTO tblUser(name, age, gender, birthdate) VALUES ('Sultano Perez', 21, 'Male', '2001-09-01');
-- Creamos relación entre el usuario recién creado con la ciudad Medellín
INSERT INTO tblUserCity(idCity, idUser) VALUES (1, 1);

-- Hacemos un INSERT de multiples registros donde insertamos 3 usuarios a la vez.
INSERT INTO 
	tblUser(name, age, gender, birthdate) 
VALUES
	('Fulano Mendoza', 20, 'Male', '2002-08-02'),
	('Perana Tamayo', 23, 'Female', '1999-07-01'),
	('Miltana Restrepo', 21, 'Female', '2001-03-19');
	
-- Sentencia UPDATE donde actualizamos el registro de de Users con nombre `Fulano Mendoza`
UPDATE tblUser SET name = 'Fulano Cortez Castillo' WHERE name = 'Fulano Mendoza';