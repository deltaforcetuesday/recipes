$(document).ready(function () {

  var chefId;

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
      .append("<option value='null'>Amount</option>")
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
    ingMeasurement.append("<option value='null'>Measurement</option>");
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
            RecipeId: res['id']
          }
          addIngredienttoDb(newIngredient);
        }

      });
  }

});