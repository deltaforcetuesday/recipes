
// html-routes.js - this file offers a set of routes for sending users to the various html pages

var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");
// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/recipe", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/share");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });


  app.get("/newuser", function(req, res) {
    if (req.user) {
      res.redirect("/share");
    }
    res.sendFile(path.join(__dirname, "../public/newuser.html"));
  });


  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  app.get("/share", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/share.html"));
  });

  app.get("/redirect", function (req, res) {
    res.sendFile(path.join(_dirname, "../public/redirect.html"));
  });

  app.get("/welcome", function (req, res) {
    res.sendFile(path.join(_dirname, "../public/welcome.html"))
  });
};

