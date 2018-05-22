$(document).ready(function () {

    var recipeResults = [];
    var mainContent = $("#main-content");

    //sticky navbar  
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $("#nb").addClass("sticky")
        } else {
            $("#nb").removeClass("sticky")
        }
    });

    $(document).on("click", "#advSearchBtn", runSearch);

    function runSearch(event) {
        event.preventDefault();
        var title = $("#recipe-name-input").val().trim();
        var chef = $("#chef-name-input").val().trim();
        var method = $("#method-input").val().trim();
        // var prepTime = $("#time-input").val().trim();
        var ingreds = $("#ingredient-input").val().trim().split(" ");

        if (title.charAt(0)) {
            console.log("title is not blank");
            var titleQuery = "?title=" + title;
            searchRecipes(titleQuery);
        }

        if (method.charAt(0)) {
            var methodQuery = "?method=" + method;
            searchRecipes(methodQuery);
        }
        if (chef.charAt(0)) {
            searchForChef(chef);
        }
        if ($("#ingredient-input").val().trim()) {
            console.log(ingreds);
            searchForIng(ingreds);
        }

    };


    function searchRecipes(query) {
        $.get("/api/recipes" + query).then(function (data) {
            console.log(data.length);
            console.log("search recipe response: " + JSON.stringify(data));
            data.forEach(function (dataItem) {
                recipeResults.push(dataItem);
            })
        });
        setTimeout(displayResults, 1000);

    };

    function searchForChef(chef) {
        if (chef) {
            chef = "?name=" + chef;
        }
        $.get("/api/chefs" + chef).then(function (res) {
            console.log(res.length)
            res.forEach(function (chefObj) {
                var chefQuery = "?chefid=" + chefObj.id;
                searchRecipes(chefQuery);

            });
            if (!recipeResults.length) {
                setTimeout(displayResults, 500);
            }
        });
    };

    function searchForIng(ingredArray) {
        ingredArray.map(function (arrItem) {
            $.get("/api/ingredients?ingred=" + arrItem).then(function (res) {
                console.log(res.length);
                res.forEach(function (ingObj) {
                    var idQuery = "?id=" + ingObj.RecipeId;
                    searchRecipes(idQuery);
                })
            });
        });

    };


    function displayResults() {
        if (!recipeResults.length) {
            noResults();
            return;
        }

        mainContent.empty();
        var column = $("<div>");
        column.addClass("card-columns");
        recipeResults.map(function (data) {
            column.append(createCard(data));
        });
        mainContent.append(column);

    };

    function createCard(data) {
        var card = $("<div>");
        card.addClass("card");
        var cardBody = $("<div>");
        cardBody.addClass("card-body");
        var titleLink = $("<a href='/recipe?id=" + data.id + "'></a>");
        var title = $("<h5>");
        title.text(data.title);
        titleLink.append(title);
        var prep = $("<p>")
            .text("Prep Time: " + data.prepTime + " minutes");
        var method = $("<p>")
            .text("Method: " + data.method);

        cardBody.append(titleLink, prep, method);
        card.append(cardBody);
        return card;

    }

    function noResults() {
      //  $("#resultText").text("No results. Please try again");
        $("#noResult").addClass("alert alert-danger")
        .text("No results. Please try again");
        emptySearchBoxes();

    };

    function emptySearchBoxes() {
        $("#chef-name-input").val("");
        $("#recipe-name-input").val("");
        $("#method-input").val("");
        $("#time-input").val("");
        $("#ingredient-input").val("");
    }



    // function searchForTitle(title) {
    //     $.get("/api/recipes?title=" + title, function (data) {
    //         console.log("Recipe retrieved: ", data);

    //         if (!data || !data.length) {
    //             console.log("no response");
    //         } else {
    //             console.log("you did it");
    //             console.log(data);
    //         }
    //     });
    // }

    // function searchForMethod(method) {
    //     $.get("/api/recipes?method=" + method).then(function (data) {
    //         console.log(data.length);
    //     });
    //    // setTimeout(displayResults, 2000);

    // };



});