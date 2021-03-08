CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id INT auto_increment NOT NULL,
burger_name VARCHAR(25),
devoured BOOLEAN NOT NULL,
primary KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VAlUES('Craby Patty', false);
INSERT INTO burgers (burger_name, devoured)
VAlUES('Chick Fillet', true );
INSERT INTO burgers (burger_name, devoured)
VAlUES('Fary odd Burger', false);



-- Updates the row where the column name is peter --
--UPDATE people--
--SET has_pet = true, pet_name = "Franklin", pet_age = 2--
--WHERE id = 4;--

--SELECT * FROM people;--
