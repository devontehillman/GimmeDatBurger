CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT auto_increment NOT NULL,
    burger_name VARCHAR(25),
    devoured BOOLEAN DEFAULT false,
    primary KEY (id)
);

