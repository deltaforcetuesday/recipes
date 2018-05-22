$(document).ready(function () {
  var targetContent = $("#target");
  var mainContent = $("#main-content");
  var chefId;
//sticky navbar  
//  $(window).on("scroll", function() {
//   if ($(window).scrollTop()){
//     $("#scroll-navbar").addClass("sticky")
//   }
//   else{
//     $("#scroll-navbar").removeClass("sticky")
//   }
// });


  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.name);
    chefId = data.id;
  });

  var ingCount = 4;

  $("#addIngredient").on("click", function (event) {
    event.preventDefault();

    var wrap = $("<div>");
    wrap.addClass("form-group");
    var inputLabel = $("<label>");
    inputLabel.addClass("label");
    var input = $("<input>");
    input.addClass("form-control");
    input.attr("id", "ingredient-" + ingCount);
    var ingAmount = $("<select>");
    ingAmount.addClass("amount");
    ingAmount.attr("id", "amount-" + ingCount)
      .append("<option value=' '>Amount</option>")
      .append("<option value='1/8'>1/8</option>")
      .append("<option value='1/4'>1/4</option>")
      .append("<option value='1/3'>1/3</option>")
      .append("<option value= '1/4'>1/4</option>")
      .append("<option value='1/2'>1/2</option>")
      .append("<option value='1'>1</option>")
      .append("<option value='2'>2</option>")
      .append("<option value='3'>3</option>");

    var ingMeasurement = $("<select>");
    ingMeasurement.addClass("measurement");
    ingMeasurement.addClass("measurement");
    ingMeasurement.attr("id", "measurement-" + ingCount);
    ingMeasurement.append("<option value=' '>Measurement</option>");
    ingMeasurement.append("<option value='tsp.'>Teaspoon</option>");
    ingMeasurement.append("<option value= 'Tbsp.'>Tablespoon</option>");
    ingMeasurement.append("<option value='cup'>Cup</option>");
    ingMeasurement.append("<option value='oz.'>Ounces</option>");
    ingMeasurement.append("<option value='lb.'>Pound</option>");
    wrap.append(inputLabel);
    wrap.append(input);

    $("#createRecipe").append(wrap);
    $("#createRecipe").append(ingAmount);
    $("#createRecipe").append(ingMeasurement);
    ingCount++;
  });

  $(document).on("click", "#recipeSubmit", submitRecipe);
  // scroll to top
  $('html, body').animate({
    scrollTop: $("#head").offset().top
  }, 500);

  function submitRecipe(event) {
    event.preventDefault();

    var title = $("#recipe-name-input");
    var method = $("#method-input");
    var prepTime = $("#time-input");
    var instructions = $("#instruction-input");

    // Don't do anything if the fields are empty
    //this is commented out for now for easier testing
    // if (!title.val().trim() ||
    //     !prepTime.val().trim() ||
    //     return;
    // }

    //call addRecipetoDb and pass in the user inputs
    addRecipetoDb({
      ChefId: chefId,
      title: title.val().trim(),
      method: method.val().trim(),
      prepTime: prepTime.val().trim(),
      instructions: instructions.val().trim(),
    });

  };

  function addIngredienttoDb(data) {
    $.post("/api/ingredients", data)
      .then(console.log(data))
  }


  function addRecipetoDb(submitData) {
    $.post("/api/recipes", submitData)
      .then(function (res) {
        console.log(res);

        for (let i = 1; i < ingCount; i++) {
          var newIngredient = {
            ingredient: $("#ingredient-" + i).val().trim(),
            amount: $("#amount-" + i).val(),
            measurement: $("#measurement-" + i).val().trim(),
            RecipeId: res["id"]
          }
          addIngredienttoDb(newIngredient);
          displayRecipe(res["id"]);
        }

      });
  }

  function displayRecipe(RecipeId) {
    $.get("/api/recipes?id=" + RecipeId, function (data) {
      console.log("Recipe retrieved: ", data);

      if (!data || !data.length) {
        displayEmpty();
      } else {
        setTimeout(displayOneRecipe(data[0]), 1000);
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
  }

});