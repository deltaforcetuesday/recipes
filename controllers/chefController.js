var express = require("express");
var router = express.Router();
var chef = require("../models/chef.js");

router.get("/chefs", function (req, res) {
    //order by id
  chef.findAll("id", function (data) {
    res.render("chef", {
      allChefs: data
    });
  });
});

router.get("/chefs/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  chef.findOne(condition, function (result) {
    res.render("chef", {
        oneChef: data
      });
  });
});



module.exports = router;