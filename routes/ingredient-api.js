
var db = require("../models");


module.exports = function(app) {


  app.post("/api/ingredients", function(req, res) {
    db.Ingredient.create(req.body).then(function(dbIng) {
      res.json(dbIng);
    });
  });

 

};
