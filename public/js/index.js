$(document).ready(function () {
    var mainContent = $("#main-content");

    //sticky navbar  
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $("#nb").addClass("sticky")
        } else {
            $("#nb").removeClass("sticky")
        }
    });



    var url = window.location.search;
    // if we click on a recipe, we redirect to that recipe
    if (url.indexOf("?id=") !== -1) {
        var recipeId = url.split("=")[1];
        console.log("id of query recipe: " + recipeId);
        getOneRecipe(recipeId);
    } else {
        getRecipes();
    }

    function getOneRecipe(id) {
        $.get("/api/recipes?id=" + id, function (data) {
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
        mainContent.empty();
        var messageH2 = $("<h2>");
        messageH2.html("No recipes yet");
        mainContent.append(messageH2);
    };

    function displayOneRecipe(recipe) {
        $(".jumbotron").addClass("hide");
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
            .text(recipe.Chef.name);

        var prepTime = $("<p>")
            .text("Prep Time: " + recipe.prepTime + " minutes");

        var method = $("<p>")
            .text("Method: " + recipe.method);
        var ingreds = $("<p>")
            .text("Ingredients:");
        var ingredList = $("<ul>");

        var instructions = $("<p>")
            .text("Instructions: " + recipe.instructions);

        recipe.Ingredients.map(function (ingred) {
            var item = $("<li>");
            if (ingred.amount === " " && ingred.measurement === " ") {
                item.text(ingred.ingredient);

            } else if (ingred.measurement === " ") {
                item.text(ingred.amount + " MUAHAHAHA ALIS IF STATEMENT WORKED " + ingred.ingredient);
            } else {
                item.text(ingred.amount + " " + ingred.measurement + " " + ingred.ingredient);
            }
            ingredList.append(item);
        });
        ingreds.append(ingredList);

        cardBody.append(cardTitle, cardAuthor, prepTime, method, ingreds, instructions);
        card.append(cardBody);
        mainContent.append(card);
    };


    function displayRecipes(retrievedRecipes) {
        mainContent.empty();
        mainContent.addClass("card-columns");
        retrievedRecipes.forEach(function (recipe) {
            var recipeCard = createRow(recipe);
            mainContent.append(recipeCard);
        });
    };

    function createRow(recipe) {
        var card = $("<div>");
        card.data("recipe", recipe);
        card.addClass("card");

        var titleLink = $("<a href='/recipe?id=" + recipe.id + "'></a>");
        var title = $("<h5>");
        title.text(recipe.title);
        titleLink.append(title);
        var chef = $("<h6>");
        chef.addClass("text-muted");
        chef.text("By: " + recipe.Chef.name);
        var prep = $("<div>")
            .text("Prep Time: " + recipe.prepTime + " minutes");
        var method = $("<div>")
            .text("Method: " + recipe.method);

        var cardBody = $("<div>");
        cardBody.addClass("card-body");

        cardBody.append(titleLink, chef, prep, method);


        card.append(cardBody);
        return card;
    };


});