
var db = require("../models");


module.exports = function(app) {


  app.get("/api/ingredients", function(req, res) {

    db.Ingredient.findAll({
        where: {
            ingredients: req.body.ingredients
        },
      include: [db.Recipe, db.Chef],
    }).then(function(dbIng) {
      res.json(dbIng);
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
  }) */


  app.get("/api/recipes/:id", function(req, res) {

    db.Recipe.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Chef]
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });


  app.post("/api/recipes", function(req, res) {
    db.Recipe.create(req.body).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

 
  app.delete("/api/recipes/:id", function(req, res) {
    db.Recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

};
