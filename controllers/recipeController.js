var express = require("express");
var router = express.Router();
var recipe = require("../models/recipe.js");

router.get("/", function (req, res) {
    //order by id
  recipe.findAll("id", function (data) {
    res.render("index", {
      allRecipes: data
    });
  });
});

router.get("/:condition", function (req, res) {
  var condition = req.params.condition;
  chef.findAll(condition, function (result) {
    res.render("index", {
        allRecipes: data
      });
  });
});


router.get("/:id", function (req, res) {
  recipe.findOne(req.params.id, function (result) {
    res.render("index", {
        recipe: data
      });
  });
});



module.exports = router;