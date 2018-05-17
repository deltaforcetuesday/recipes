$("#recipeSubmit").on("click", function(event) {
    event.preventDefault();
  var allIng = [];
    // Make a newRecipe object
    var newRecipe = {
      chefName: $("#chef-name-input").val().trim(),
      recipeTitle: $("#recipe-name-input").val().trim(),
      method:$("#method-input").val().trim(),
      prepTime:$("#time-input").val().trim(),
    }
      
    var newIngredient1 = {
      ingredient: $("#ingredient-1").val().trim(),
      amount: $("#amount-1").val().trim(),
      measurement: $("#measurement-1").val().trim()
    }
    allIng.push(newIngredient1);

    var newIngredient2 = {
      ingredient: $("#ingredient-2").val().trim(),
      amount: $("#amount-2").val().trim(),
      measurement: $("#measurement-2").val().trim()
    }
    allIng.push(newIngredient2);

    var newIngredient3 = {
      ingredient: $("#ingredient-3").val().trim(),
      amount: $("#amount-3").val().trim(),
      measurement: $("#measurement-3").val().trim()
    }
    allIng.push(newIngredient3);

    var newIngredient4 = {
      ingredient: $("#ingredient-4").val().trim(),
      amount: $("#amount-4").val().trim(),
      measurement: $("#measurement-4").val().trim()
    }
    allIng.push(newIngredient4);

    var newIngredient5 = {
      ingredient: $("#ingredient-5").val().trim(),
      amount: $("#amount-5").val().trim(),
      measurement: $("#measurement-5").val().trim()
    }
    allIng.push(newIngredient5);

    var newIngredient6 = {
      ingredient: $("#ingredient-6").val().trim(),
      amount: $("#amount-6").val().trim(),
      measurement: $("#measurement-6").val().trim()
    }
    allIng.push(newIngredient6);

    var newIngredient7 = {
      ingredient: $("#ingredient-7").val().trim(),
      amount: $("#amount-7").val().trim(),
      measurement: $("#measurement-7").val().trim()
    }
    allIng.push(newIngredient7);

    var newIngredient8 = {
      ingredient: $("#ingredient-8").val().trim(),
      amount: $("#amount-8").val().trim(),
      measurement: $("#measurement-8").val().trim()
    }
    allIng.push(newIngredient8);

    var newIngredient9 = {
      ingredient: $("#ingredient-9").val().trim(),
      amount: $("#amount-9").val().trim(),
      measurement: $("#measurement-9").val().trim()
    }
    allIng.push(newIngredient9);

    var newIngredient10 = {
      ingredient: $("#ingredient-10").val().trim(),
      amount: $("#amount-10").val().trim(),
      measurement: $("#measurement-10").val().trim()
    }
    allIng.push(newIngredient10);
  
    console.log(newRecipe);

    $.post("/api/recipes", newRecipe)
      .then( function (){
        window.location.href = "/index";
        var row = $("<div>");
        row.addClass("recipe");
      
        row.append("<p>" + "chef: " + newRecipe.chefName + " </p>");
        row.append("<p>" + "recipe: " + newRecipe.name + "</p>");
      });
      
    $.post("/api/ingredients", newIngredient1)
        .then(function() {
          window.location.href = "/index";
          for (let i = 0; i < allIng.length; i++) {
            row.append("<p>" + allIng.amount[i] + "  "+ allIng.measurement[i] +"  "+ allIng.ingredient[i] +     "</p>");    
        } 
  
        $("#main-content").prepend(row);
  
      });
  
  $.get("/api/recipes", function(data) {
    window.location.href = "/index";
  
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("recipe");
  
        row.append("<p>" + data[i].name + " recipeed.. </p>");
        row.append("<p>" + data[i].ingredient + "</p>");
       
  
        $("#main-content").prepend(row);
  
      }
  
    }
  
  });
  
});