CREATE DATABASE chefs_db;
USE chefs_db;

CREATE TABLE chefs
(
	chefId int(10) NOT NULL ,
	name varchar(255) NOT NULL,
	password varchar(50),
    email varchar(300),
    recipeCount int(10),
	PRIMARY KEY (chefId)
);

USE chefs_db;
CREATE TABLE recipes
(
	recipeId int(10) NOT NULL AUTO_INCREMENT ,
    chefId int(10),
	title varchar(255) NOT NULL,
    instructions varchar(500),
    imageLink varchar(255),
    prepTime int(50),
    method varchar(255),
	PRIMARY KEY (recipeId),
    FOREIGN Key (chefId) REFERENCES chefs (ChefId)
);

USE chefs_db;
CREATE TABLE ingredients
(
	id int(10) NOT NULL AUTO_INCREMENT,
    recipeId int(10),
    ingredient varchar(225),
    amount DECIMAL(5,2),
    measurement varchar(100),
	PRIMARY KEY (id),
    FOREIGN KEY (recipeId) REFERENCES recipes (recipeId)
);

