$(document).ready(function () {

    var mainContent = $("#main-content");
    var recipes;


    $("#submitBtn").on("click", function(){
        var input = $("#searchInput").val().trim();
        
    });

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
            console.log("Posts", data);
            recipes = data;
            if (!recipes || !recipes.length) {
                displayEmpty();
            } else {
                initializeRows();
            }
        });
    };

    function displayEmpty () {
       mainContent.empty();
        var messageH2 = $("<h2>");
        messageH2.html("No recipes yet");
        mainContent.append(messageH2);
    }


    function initializeRows() {
       mainContent.empty();
        var postsToAdd = [];
        for (var i = 0; i < recipes.length; i++) {
          postsToAdd.push(createNewRow(recipes[i]));
        }
        mainContent.append(postsToAdd);
      };

      function createNewRow(arecipe) {
        var newCard = $("<div>");
        newCard.data("recipe", arecipe);
        newCard.addClass("card");
        var newCardHeader = $("<div>");
        newCardHeader.addClass("card-header");
        var newCardTitle = $("<a href='/api/recipes/" + arecipe.id + "'>" + arecipe.title + "</a>");
        
        //newCardTitle.text(arecipe.title + " ");
        var newCardAuthor = $("<h5>");
        newCardAuthor.text("Written by: " + arecipe.Chef.name);
        newCardAuthor.css({
          float: "right",
          color: "blue",
          "margin-top":
          "-10px"
        });

        var newCardBody = $("<div>");
        newCardBody.addClass("card-body");
        var newCardP = $("<p>");
        newCardP.text("Prep Time: " + arecipe.prepTime + " minutes  Method: " +  arecipe.method);
        newCardHeader.append(newCardTitle);
        newCardHeader.append(newCardAuthor);
        newCardBody.append(newCardP);
       
 
        newCard.append(newCardHeader);
        newCard.append(newCardBody);

    
        return newCard;
      };


});