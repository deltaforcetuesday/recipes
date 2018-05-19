$(document).ready(function () {
    console.log("hey well at least the js file is connected");


    $(document).on("click", "#advSearchBtn", runSearch);

    function runSearch(event) {
        event.preventDefault();

        var title = $("#recipe-name-input").val().trim();
        var method = $("#method-input").val().trim();
        var prepTime = $("#time-input").val().trim();

        var tTitle = "fettucine alfredo";
        var tMethod = "stove";

        searchRecipe(tTitle);


    };

    function searchRecipe(input) {
        $.get("/api/recipes/?title=" + input, function (data) {
            console.log("input searched: " + input)
            console.log("search recipe response: " + JSON.stringify(data))
        })
    };





});