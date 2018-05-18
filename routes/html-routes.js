
// html-routes.js - this file offers a set of routes for sending users to the various html pages

var path = require("path");

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
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });


  app.get("/newuser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newuser.html"));
  });


  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  app.get("/share", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/share.html"));
  });
};
