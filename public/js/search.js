$(document).ready(function () {
    console.log("hey well at least the js file is connected");



    $(document).on("click", "#advSearchBtn", runSearch);

    function runSearch(event) {
        event.preventDefault();

        // var title = $("#recipe-name-input").val().trim();
        // var method = $("#method-input").val().trim();
        // var prepTime = $("#time-input").val().trim();

        // var tTitle = "fettucine alfredo";
        // var tMethod = "stove";

        // var tahini = "tahini fettucine butter oil ";
        // var searchInput = tahini.split(" ").join("-");
        // console.log(searchInput);
       // searchRecipe(tTitle);
       searchRecipe();


    };

    // function searchRecipe(input) {
    //     $.get("/api/ingredients?id=" + input, function (data) {
    //         console.log("input searched: " + input);
    //         console.log("search recipe response: " + JSON.stringify(data));

    //     });
    // };

    function searchRecipe() {
        $("#main-content").empty();

        $.get("/api/ingredients", function (data) {
            console.log("input searched: ");
            console.log("search recipe response: " + JSON.stringify(data));
          
            var newdiv= $("<div>");
            for (i=0; i<data.length; i++ ) {
                var p = $("<p>");
                p.text(data[i].ingred + " " + data[i].Recipe.title);
                newdiv.append(p);
            }

    
            $("#main-content").append(newdiv);

        });
    };
    // function searchRecipe(input) {
    //     $.get("/api/ingredients?ingred=" + input, function (data) {
    //         console.log("input searched: " + input);
    //         console.log("search recipe response: " + JSON.stringify(data));
    //         $("#main-content").empty();
    //         var newdiv= $("<div>");
    //         var p = $("<p>");
    //         p.text(data[0].ingredient + " " + data[0].Recipe.title);
    //         newdiv.append(p);
    //         // data.forEach(function(item) {
    //         //     var p = $("<p>");
    //         //     p.text(item.ingred);
    //         //     var p2 = $("<p>");
    //         //     p2.text(item.Recipe.title);
    //         //     newdiv.append(p + p2);
    //         // });
    //         $("#main-content").append(newdiv);

    //     });
    // };

  



});