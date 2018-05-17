INSERT INTO chefs (name, email, password,recipeCount) VALUES ("sahar",  "sahar@gmail.com","aaaa", 2);
INSERT INTO chefs (name, email, password,recipeCount) VALUES ("ali", "ali@gmail.com","3333", 1);
INSERT INTO chefs (name, email, password,recipeCount) VALUES ("Susan",  "susan@gmail.com","1515", 1);


INSERT INTO recipes (chefId, title, instructions, imageLink, prepTime, method) VALUES (1, "chicken currey",  "In a large pot fry the onions till add the chicken potato and curry powder and cook for five minutes add the stoch and let it simmer for 30 minutes", "/images/chickenPotatoCurry.jpg", 15, "stove");
INSERT INTO recipes (chefId, title, instructions, imageLink, prepTime, method) VALUES (2, "Date Balls", "Mix all ingredients in a food processor till it form a homogenous mix shape into 3/4 of an inch balls"," -", 30, "non");

INSERT INTO ingredients (ingredient, amount, measurement) VALUES ("chicken breasts", 2, "lb");
INSERT INTO ingredients (ingredient, amount, measurement) VALUES ("cubed potato", 1, "lb" );
INSERT INTO ingredients (ingredient, amount, measurement) VALUES ("curry powder" ,2 , "tablespoon");
INSERT INTO ingredients (ingredient, amount, measurement) VALUES ("oil", 2, "tablespoon");
INSERT INTO ingredients (ingredient, amount, measurement) VALUES ("salt" , 0,"to taste");
INSERT INTO ingredients (ingredient, amount, measurement) VALUES ("chopped dates", 2, "cups");
INSERT INTO ingredients (ingredient, amount, measurement) VALUES ("chopped walnuts", 1, "cups");
INSERT INTO ingredients (ingredient, amount, measurement) VALUES ("tahini", 2, "tablespoons");

INSERT INTO recipeingredients (ingredientId, recipeId) VALUES (1, 1);
INSERT INTO recipeingredients (ingredientId, recipeId) VALUES (2, 1);
INSERT INTO recipeingredients (ingredientId, recipeId) VALUES (3, 1);
INSERT INTO recipeingredients (ingredientId, recipeId) VALUES (4, 1);
INSERT INTO recipeingredients (ingredientId, recipeId) VALUES (5, 1);
INSERT INTO recipeingredients (ingredientId, recipeId) VALUES (6, 1);
INSERT INTO recipeingredients (ingredientId, recipeId) VALUES (6, 2);
INSERT INTO recipeingredients (ingredientId, recipeId) VALUES (7, 2);
INSERT INTO recipeingredients (ingredientId, recipeId) VALUES (8, 2);