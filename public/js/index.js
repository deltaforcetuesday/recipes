$(document).ready(function () {
    var targetContent = $("#target");
    var mainContent = $("#main-content");


    var url = window.location.search;
    // if we click on a recipe, we redirect to that recipe
    if (url.indexOf("?id=") !== -1) {
        var recipeId = url.split("=")[1];
        console.log("id of query recipe: " + recipeId);
        getOneRecipe(recipeId);
    }
    else {
        getRecipes();
    }

    function getOneRecipe(id) {
        $.get("/api/recipes/?id=" + id, function (data) {
            console.log("Recipe retrieved: ", data);

            if (!data || !data.length) {
                displayEmpty();
            } else {
                displayOneRecipe(data[0]);
            }
        });
    };


    function getRecipes() {
        $.get("/api/recipes", function (data) {
            console.log("Recipes retrieved: ", data);
            if (!data || !data.length) {
                displayEmpty();
            } else {
                displayRecipes(data);
            }
        });
    };

    function displayEmpty() {
        targetContent.empty();
        var messageH2 = $("<h2>");
        messageH2.html("No recipes yet");
        targetContent.append(messageH2);
    };

    function displayOneRecipe(recipe) {
        mainContent.empty();
        var card = $("<div>")
            .data("recipe", recipe)
            .addClass("card");
        var cardBody = $("<div>")
            .addClass("card-body");

        var cardTitle = $("<h4>")
            .addClass("card-title")
            .text(recipe.title.toUpperCase());

        var cardAuthor = $("<h5>")
            .addClass("card-subtitle text-muted")

        var prepTime = $("<p>")
            .text("Prep Time: " + recipe.prepTime + " minutes");

        var method = $("<p>")
            .text("Method: " + recipe.method);
        var ingreds = $("<p>")
            .text("Ingredients:");
        var ingredList = $("<ul>");

        recipe.Ingredients.map(function (ingred) {
            var item = $("<li>")
                .text(ingred.amount + " " + ingred.measurement + " " + ingred.ingredient);
            ingredList.append(item);
        });
        ingreds.append(ingredList);

        cardBody.append(cardTitle, cardAuthor, prepTime, method, ingreds);
        card.append(cardBody);
        mainContent.append(card);
    };


    function displayRecipes(retrievedRecipes) {
        targetContent.empty();
        retrievedRecipes.forEach(function (recipe) {
            var recipeCard = createRow(recipe);
            targetContent.append(recipeCard);
        });
    };

    function createRow(recipe) {
        var card = $("<div>");
        card.data("recipe", recipe);
        card.addClass("card");
        var cardHeader = $("<div>");
        cardHeader.addClass("card-header");
        var cardTitle = $("<a href='/recipe?id=" + recipe.id + "'>" + recipe.title + "</a>");
        var cardAuthor = $("<h5>");
        cardAuthor.text("Written by: " + recipe.Chef.name);
        cardAuthor.css({
            float: "right",
            color: "blue",
            "margin-top": "-10px"
        });

        var cardBody = $("<div>");
        cardBody.addClass("card-body");
        var cardP = $("<p>");
        cardP.text("Prep Time: " + recipe.prepTime + " minutes  Method: " + recipe.method);
        cardHeader.append(cardTitle);
        cardHeader.append(cardAuthor);
        cardBody.append(cardP);


        card.append(cardHeader);
        card.append(cardBody);
        return card;
    };


});