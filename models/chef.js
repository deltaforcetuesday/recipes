
var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
  var Chef = sequelize.define("Chef", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
        isEmail: true
      }
    },
    recipeCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  },{
    timestamps: false

  });




  Chef.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  Chef.hook("beforeCreate", function (chef) {
    chef.password = bcrypt.hashSync(chef.password, bcrypt.genSaltSync(10), null);
  });

    Chef.associate = function(models) {
        Chef.hasMany(models.Recipe, {
          onDelete: "cascade"
        });
    };

    return Chef;
};