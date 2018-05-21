var db = require("../models");
const Op = db.Sequelize.Op;


module.exports = function (app) {


  app.post("/api/ingredients", function (req, res) {
    db.Ingredient.create(req.body).then(function (dbIng) {
      res.json(dbIng);
    });
  });


  app.get("/api/ingredients", function (req, res) {
    var query = {};

    // search = req.params.search;
    // var arr = search.split("-");
    // var arr = str.split("&");
    // arr.push("butter");
    // arr.push("oil");
    if (req.query.ingred) {
      query.ingredient = req.query.ingred;
   //   arr.push(req.query.ingred);
      // arr = req.query.ingred.split("-");

    }
    // if (req.query.id) {
    //   query.id = req.query.id;
    // }
    //arr = ["fettucine", "tahini", "salt"];
    db.Ingredient.findAll({

      where: query,
      // {
      //   ingred: {
      //     [Op.or]: arr
      //   }
      // },
      include: [db.Recipe],
    }).then(function (dbIng) {
      res.json(dbIng);
    });
  });



};