$(document).ready(function () {

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.name);
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

  $(document).on("click", "#recipeSubmit", submitRecipe)
  //$("#add-user-btn").on("click", function(){
  //});

  function submitRecipe(event) {
    event.preventDefault();

    //set all the inputs to variables
    var ChefId = $("#chef-name-input");
    var title = $("#recipe-name-input");
    var method = $("#method-input");
    var prepTime = $("#time-input");
    var instructions = $("#instruction-input");

    // Don't do anything if the fields are empty
    //this is commented out for now for easier testing
    // if (!ChefId.val().trim() ||
    //     !title.val().trim() ||
    //     return;
    // } 

    //call addRecipetoDb and pass in the user inputs
    addRecipetoDb({
      ChefId: ChefId.val().trim(),
      title: title.val().trim(),
      method: method.val().trim(),
      prepTime: prepTime.val().trim(),
      instructions: instructions.val().trim(),
    });

    function addIngredienttoDb(data) {
      $.post("/api/ingredients", data)
        .then(console.log(data))
    }

    // A function for creating a recipe in the database then console logging the info 
    function addRecipetoDb(submitData) {
      $.post("/api/recipes", submitData)
        .then(function (res) {
          console.log(res);


          // var allIng = [];
          for (let i = 1; i < ingCount; i++) {
            var newIngredient = {
              ingredient: $("#ingredient-" + i).val().trim(),
              amount: $("#amount-" + i).val(),
              measurement: $("#measurement-" + i).val().trim(),
              RecipeId: res['id']
            }
            addIngredienttoDb(newIngredient);
            // allIng.push(newIngredient);
          }

        });
    }
    // console.log("this is the array" + allIng);
    // console.log(allIng);  
  };
});
//calls addRecipetoDb on button click with dummy data instead of user input.
// addRecipetoDb({
//   ChefId: 1,  //if there are no chefs in the db, comment out this line. otherwise it will error out
//   title: 'salsa',
//   method: 'none',
//   prepTime: 10
// });