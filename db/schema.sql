CREATE DATABASE chefs_db;
USE chefs_db;

CREATE TABLE chefs
(
	id int NOT NULL ,
	name varchar(255) NOT NULL,
	password varchar(),
    email varchar(300),
    recipeCount int,
    
	PRIMARY KEY (id)
);
USE chefs_db;

CREATE TABLE recipes
(
	id int NOT NULL ,
	title varchar(255) NOT NULL,
    ingredients varchar(400),
    instructions varchar(500),
    imageLink varchar(255),
    prepTime int,
    methhod varchar(255),
    chefId int NOT NULL,
	PRIMARY KEY (id)
);

