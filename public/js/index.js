$(document).ready(function () {

    var targetContent = $("#target");

    getRecipes();
    /*

    var url = window.location.search;
    var authorId;
    if (url.indexOf("?author_id=") !== -1) {
      authorId = url.split("=")[1];
      getPosts(authorId);
    }
    // If there's no authorId we just get all posts as usual
    else {
      getPosts();
    }

    function getPosts(author) {
        authorId = author || "";
        if (authorId) {
          authorId = "/?author_id=" + authorId;
        }
        $.get("/api/posts" + authorId, function(data) {
          console.log("Posts", data);
          posts = data;
          if (!posts || !posts.length) {
            displayEmpty(author);
          }
          else {
            initializeRows();
          }
        });
    } */


    function getRecipes() {
        $.get("/api/recipes", function (data) {
            console.log("Recipes retrieved: ", data);
            recipes = data;
            if (!data || !data.length) {
                displayEmpty();
            } else {
                displayRecipes(data);
            }
        });
    };

    function displayEmpty () {
       targetContent.empty();
        var messageH2 = $("<h2>");
        messageH2.html("No recipes yet");
        targetContent.append(messageH2);
    }


      function displayRecipes(retrievedRecipes) {
        targetContent.empty();
            retrievedRecipes.forEach(function(recipe) {
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
        var cardTitle = $("<a href='/api/recipes/" + recipe.id + "'>" + recipe.title + "</a>");
        var cardAuthor = $("<h5>");
        cardAuthor.text("Written by: " + recipe.Chef.name);
        cardAuthor.css({
          float: "right",
          color: "blue",
          "margin-top":
          "-10px"
        });

        var cardBody = $("<div>");
        cardBody.addClass("card-body");
        var cardP = $("<p>");
        cardP.text("Prep Time: " + recipe.prepTime + " minutes  Method: " +  recipe.method);
        cardHeader.append(cardTitle);
        cardHeader.append(cardAuthor);
        cardBody.append(cardP);
       
 
        card.append(cardHeader);
        card.append(cardBody);
        return card;
      };


});