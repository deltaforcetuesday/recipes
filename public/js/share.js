$(document).ready(function () {

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
        prepTime: prepTime.val().trim()
    }); 

//calls addRecipetoDb on button click with dummy data instead of user input.
    // addRecipetoDb({
    //   ChefId: 1,  //if there are no chefs in the db, comment out this line. otherwise it will error out
    //   title: 'salsa',
    //   method: 'none',
    //   prepTime: 10
    // });
  };

  // A function for creating a recipe in the database then console logging the info 
  function addRecipetoDb(submitData) {
    $.post("/api/recipes", submitData)
      .then(console.log(submitData));
  }


});