var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "username"
  },
  function (username, password, done) {
    db.Chef.findOne({
      where: {
        username: name
      }
    }).then(function (dbChef) {
      if (!dbChef) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      else if (!dbChef.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, dbChef);
    });
  }
));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;