var db = require("../models");

const Op = db.Sequelize.Op;


module.exports = function (app) {


  app.get("/api/recipes", function (req, res) {
    var query = {};
    if (req.query.id) {
      query.id = req.query.id;
    }
    if (req.query.title) {
      query.title = req.query.title;
    }
    if (req.query.method) {
      query.method = req.query.method
    }
    if (req.query.chefid) {
      query.chefId = req.query.chefid
    }
    if (req.query.preptime) {
      query.prepTime = req.query.preptime
    }

    db.Recipe.findAll({

      where: query,
      include: [db.Chef, db.Ingredient],
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });




  app.get("/api/recipes/:id", function (req, res) {

    db.Recipe.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Chef, db.Ingredient]
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });



  app.post("/api/recipes", function (req, res) {
    db.Recipe.create(req.body).then(function (dbRecipe) {
      res.json(dbRecipe);
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