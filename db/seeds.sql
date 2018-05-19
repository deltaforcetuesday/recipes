use chefs_db;

INSERT INTO chefs (name, email, password,recipeCount) VALUES ("sahar",  "sahar@gmail.com","aaaa", 2);
INSERT INTO chefs (name, email, password,recipeCount) VALUES ("ali", "ali@gmail.com","3333", 1);
INSERT INTO chefs (name, email, password,recipeCount) VALUES ("Susan",  "susan@gmail.com","1515", 1);


INSERT INTO recipes (chefId, title, instructions, imageLink, prepTime, method) VALUES (1, "Chicken Curry",  "In a large pot fry the onions till add the chicken potato and curry powder and cook for five minutes add the stoch and let it simmer for 30 minutes", "/images/chickenPotatoCurry.jpg", 15, "stove");
INSERT INTO recipes (chefId, title, instructions, imageLink, prepTime, method) VALUES (2, "Date Balls", "Mix all ingredients in a food processor till it form a homogenous mix shape into 3/4 of an inch balls"," -", 30, "non");
INSERT INTO recipes (chefId, title, instructions, imageLink, prepTime, method) VALUES (3, "Fettucine Alfredo", "In a large pot of boiling water, cook pasta. Reserve about 1 cup of pasta water then drain. Meanwhile, in a large skillet over medium heat, add cream and butter. Cook until the butter is melted and the cream is heated through. Whisk in Parmesan and season with salt and pepper. Remove from heat. Add cooked pasta and toss until coated in sauce."," -", 20, "stove");
INSERT INTO recipes (chefId, title, instructions, imageLink, prepTime, method) VALUES (3, "Jalapeno Poppers", "Preheat oven to 400 degrees F. Spray a baking sheet with cooking spray. Fill each jalapeno pepper half with cream cheese, Cheddar cheese, and bread crumbs, respectively, and arrange peppers on the prepared baking sheet. Bake in the preheated oven until jalapenos are tender and cheese melts, about 20 minutes."," -", 20, "oven");
INSERT INTO recipes (chefId, title, instructions, imageLink, prepTime, method) VALUES (1, "Grilled Peaches", "Preheat grill for medium heat and lightly oil the grate. Whisk olive oil, basil, thyme, salt, and pepper together in a bowl. Allow flavors to combine for 5 minutes. Brush oil mixture on inside flesh of peach halves. Grill peaches, flesh sides down until softened and grill marks appear, about 4 minutes.", "-", 5, "grill");
INSERT INTO recipes (chefId, title, instructions, imageLink, prepTime, method) VALUES (2, "Peanut Butter Cookies",  "Preheat oven to 350 degrees F. Mix peanut butter, sugar, and egg together in a bowl until smooth and creamy. Roll mixture into small balls and arrange on a baking sheet; flatten each with a fork, making a criss-cross pattern. Bake for 10 minutes.", "-", 10, "oven");




INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (1, "chicken breasts", 2, "lb");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (1, "cubed potato", 1, "lb" );
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (1, "curry powder", 2, "tablespoon");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (1, "oil", 2, "tablespoon");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (1,"salt" , 0,"to taste");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (2, "chopped dates", 2, "cups");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (2, "chopped walnuts", 1, "cups");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (2, "tahini", 2, "tablespoons");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (3, "fettucine", 1, "lb");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (3, "heavy cream", 1, "cups");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (3, "butter", 1, "cups");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (3, "parmesean", 1, "cups");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (3, "black pepper", 0, "to taste");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (4, "jalapeno", 1, "lb");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (4, "cream cheese", 2, "ounces");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (4, "cheddar cheese", 2, "ounces");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (4, "panko bread crumbs", 4, "tablespoon");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (5, "olive oil", 2, "tablespoon");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (5, "basil", 1, "teaspoon");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (5, "thyme", 1, "teaspoon");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (5, "black pepper", 0, "to taste");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (5, "peaches", 2, "cups");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (6, "peanut butter", 1, "cups");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (6, "white sugar", 1, "cups");
INSERT INTO ingredients (recipeId, ingredient, amount, measurement) VALUES (6, "eggs", 1, "egg");







