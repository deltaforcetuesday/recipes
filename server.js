var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./config/passport");
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initalize());
app.use(passport.session());




require("./routes/html-routes.js")(app);
require("./routes/chef-api.js")(app);
require("./routes/recipe-api.js")(app);
require("./routes/ingredient-api.js")(app);


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});