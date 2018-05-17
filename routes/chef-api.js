
var db = require("../models");


module.exports = function(app) {
 
 
 app.post("/newuser", function(req, res) {
    db.Chef.create(req.body).then(function(dbChef) {
      res.json(dbChef);
    });
  }); 

};