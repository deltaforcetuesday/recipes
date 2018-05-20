var db = require("../models");

const Op = db.Sequelize.Op;


module.exports = function (app) {

  // Post.findAll({
  //   where: {
  //     authorId: {
  //       [Op.or]: [12, 13]
  //     }
  //   }
  // });

  // {
  //   rank: {
  //     [Op.or]: {
  //       [Op.lt]: 1000,
  //       [Op.eq]: null
  //     }
  //   }
  // }
  // // rank < 1000 OR rank IS NULL

  // {
  //   createdAt: {
  //     [Op.lt]: new Date(),
  //     [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
  //   }
  // }
  // // createdAt < [timestamp] AND createdAt > [timestamp]

  // {
  //   [Op.or]: [
  //     {
  //       title: {
  //         [Op.like]: 'Boat%'
  //       }
  //     },
  //     {
  //       description: {
  //         [Op.like]: '%boat%'
  //       }
  //     }
  //   ]
  // }
  // // title LIKE 'Boat%' OR description LIKE '%boat%'

  // app.get("/api/recipes", function (req, res) {
  //   var query = {};
  //   if (req.query.id) {
  //     query.id = req.query.id;
  //   }
  //   if (req.query.title) {
  //     query.title = req.query.title;
  //   }
  //   // if (req.query.method) {
  //   //   query.method = req.query.method;
  //   // }
  //   // if (req.query.timeInput) {
  //   //   query.timeInput = req.query.timeInput;
  //   // }
  //   db.Recipe.findAll({
  //     where: {
  //       [Op.or]: [{
  //           id: query.id,
  //         },
  //         {
  //           title: query.title
  //         }
  //       ]
  //     },
  //     include: [db.Chef, db.Ingredient],
  //   }).then(function (dbRecipe) {
  //     res.json(dbRecipe);
  //   });
  // });


  // // title LIKE 'Boat%' OR description LIKE '%boat%'

  app.get("/api/recipes", function (req, res) {
    var query = {};
    if (req.query.id) {
      query.id = req.query.id;
    }
    if (req.query.title) {
      query.title = req.query.title;
    }
    db.Recipe.findAll({

      where: query,
      // {
      //   title: {
      //     [Op.or]: [query.title, 'Chicken Curry']
      //   }
      // },
      include: [db.Chef, db.Ingredient],
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

  /*

   app.get("/api/recipes", function (req, res) {
    var query = {};
    if (req.query.id) {
      query.id = req.query.id
    }
    db.Recipe.findAll({
      where: query,
      include: [db.Chef, db.Ingredient],
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });
    
    app.get("/api/recipes/:title", function(req, res) {
        db.Recipe.findAll({
            where: {
                title: req.params.title
            },
            include: [db.Chef, db.Ingredient],
        }).then(function(dbRecipe){
            res.json(dbRecipe);
        })
    })  

    */


  app.get("/api/recipes/:id", function (req, res) {
    // var query = {};
    // if (req.query.author_id) {
    //   query.AuthorId = req.query.author_id;
    // }
    db.Recipe.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Chef, db.Ingredient]
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

  /*
    app.get("/recipe", function(req, res) {

      db.Recipe.findOne({
        where: {
          id: req.params.id
        },
        include: [db.Chef, db.Ingredient]
      }).then(function(dbRecipe) {
        res.json(dbRecipe);
      });
    }); */


  app.post("/api/recipes", function (req, res) {
    db.Recipe.create(req.body).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });
  //   app.post("/api/recipes", function (req, res) {
  //     db.Recipe.create(req.body).then(function (dbRecipe) {
  //       res.json(dbRecipe)
  //       .success(function(Recipe) {
  //         console.log(Recipe)
  //         Recipe.find(Recipe.id)
  //           .success(function(result){
  //             console.log(result)
  //           })
  //     });
  //   });
  // });


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