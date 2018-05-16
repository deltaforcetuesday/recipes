
module.exports = function(sequelize, DataTypes) {
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
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      recipeCount: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    });
  
    Chef.associate = function(models) {
        Chef.hasMany(models.Recipe, {
          onDelete: "cascade"
        });
      }; 
  
    return Chef;
  };