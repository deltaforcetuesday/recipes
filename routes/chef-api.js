
  app.post("/newuser", function(req, res) {
    db.Chef.create(req.body).then(function(dbChef) {
      res.json(dbChef);
    });
  });