var db = require("../models");


module.exports = function (app) {


  app.get("/api/recipes", function (req, res) {
    var query = {};
    if (req.query.id) {
      query.id = req.query.id
    }
    db.Recipe.findAll({
      where: query,
      include: [db.Chef, db.Ingredient],
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });



  /*
  app.get("/api/ingredients/:recipid", function(req, res) {
      db.Ingredient.findAll({
          where: {
              RecipeId: req.params.recipid
          },
          include: [db.Recipe],
      }).then(function(dbIngred){
          res.json(dbIngred);
      })
  })  


  app.get("/api/recipes/:id", function(req, res) {
    // var query = {};
    // if (req.query.author_id) {
    //   query.AuthorId = req.query.author_id;
    // }
    db.Recipe.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Chef, db.Ingredient]
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });  

/*
  app.get("/recipe", function(req, res) {

    db.Recipe.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Chef, db.Ingredient]
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  }); */


  // app.post("/api/recipes", function (req, res) {
  //   db.Recipe.create(req.body).then(function (dbRecipe) {
  //     res.json(dbRecipe);
  //   });
  // });
  app.post("/api/recipes", function (req, res) {
    db.Recipe.create(req.body).then(function (dbRecipe) {
      res.json(dbRecipe);
      success(function(Recipe) {
        console.log(Recipe)
        Recipe.find(Recipe.id)
          .success(function(result){
            console.log(result)
          })
    });
  });
});


  app.delete("/api/recipes/:id", function (req, res) {
    db.Recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

};