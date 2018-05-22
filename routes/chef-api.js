var db = require("../models");
var passport = require("../config/passport");


module.exports = function (app) {

  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json("/share");
  });

  app.post("/api/newuser", function (req, res) {
    db.Chef.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(function () {
      res.redirect(307, "/api/login");
    }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/")
  });

  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        name: req.user.name,
        id: req.user.id
      });
    }
  });

  app.get("/api/chefs", function (req, res) {
    var query = {};
    if (req.query.name) {
      query.name = req.query.name;
    }
      db.Chef.findAll({
        where: query,
      }).then(function (dbChef) {
        res.json(dbChef);
      });
  });

}
// app.post("/newuser", function (req, res) {
//   var username = req.body.name
//   // var email = req.body.email

//   bcrypt.hash(req.body.password, null, null, function (err, hash) {
//     // var user = new User({ username: username, email: email, password: hash })
//     var user = db.Chef.create(req.body).then(function (newUser) {
//       console.log("Successfully added " + username + " to the database");
//       req.session.regenerate(function () {
//         res.redirect("/search");
//         req.session.user = user;
//       })
//     })
//   });
// })

// app.post("/login", function (req, response) {
//   var username = req.body.username;
//   var enteredPassword = req.body.password;

//   new User({ username: username }).fetch().then(function (found) {
//     if (found) {
//       console.log("User's name was found in database");
//       bcrypt.compare(enteredPassword, found.get("password"), function (err, res) {
//         if (res) {
//           req.session.regenerate(function () {
//             console.log("password match! redirecting..")
//             response.redirect("/share")
//             req.session.found = found.username;
//           });
//         } else {
//           console.log("password did not match. redirecting to login..")
//           response.redirect("/login")
//         }
//       })
//     } else {
//       console.log("username did not match. redirecting to login..")
//       response.redirect("/login");
//     }
//   })
// });

// app.get("/share", function (req, res) {
//   if (req.session) {
//     res.render("/share");
//   } else {
//     res.render("/redirect");
//   }
// });