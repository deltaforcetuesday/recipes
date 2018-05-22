$(document).ready(function () {
    var retrievedIngs = [];
    //var retrievedTitle = [];
    var mainContent = $("#main-content");

    $(document).on("click", "#advSearchBtn", runSearch);

    function runSearch(event) {
        event.preventDefault();
        //var title = $("#recipe-name-input").val().trim();
        // var method = $("#method-input").val().trim();
        // var prepTime = $("#time-input").val().trim();
        var ingreds = $("#ingredient-input").val().trim().split(" ");
        searchForIng(ingreds);
        //searchForName(title);

    };

    function searchForIng(ingredArray) {
        ingredArray.map(function (arrItem) {
            $.get("/api/ingredients?ingred=" + arrItem).then(function (data) {
                console.log("search recipe response: " + JSON.stringify(data));
                data.forEach(function(dataItem) {
                    retrievedIngs.push(dataItem);
                })
            });
        });

        //displayResults runs before there are any ingredients in the retrievedIngs array
        //solved this by setting a timeout
        setTimeout(displayResults, 3000);

    };

    function displayResults() {
        if (!retrievedIngs.length) {
            noResults();
            return;
        }

        mainContent.empty();
        var column = $("<div>");
        column.addClass("card-columns");
        retrievedIngs.map(function (data) {
            column.append(createCard(data));
        });
        mainContent.append(column);

    };

    function createCard(data) {
        var card = $("<div>");
        card.addClass("card");
        var cardBody = $("<div>");
        cardBody.addClass("card-body");
        var titleLink = $("<a href='/recipe?id=" + data.Recipe.id + "'></a>");
        var title = $("<h5>");
        title.text(data.Recipe.title);
        titleLink.append(title);
        var prep = $("<p>")
            .text("Prep Time: " + data.Recipe.prepTime + " minutes");
        var method = $("<p>")
            .text("Method: " + data.Recipe.method);

        cardBody.append(titleLink, prep, method);
        card.append(cardBody);
        return card;

    }

    function noResults() {
        $("#resultText").text("No results. Please try again");
        emptySearchBoxes();

    };

    function emptySearchBoxes() {
        $("#chef-name-input").val("");
        $("#recipe-name-input").val("");
        $("#method-input").val("");
        $("#time-input").val("");
        $("#ingredient-input").val("");
    }


});