module.exports = function (sequelize, DataTypes) {
  var Ingredient = sequelize.define("Ingredient", {
      ingredient: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        len: [1]
      },
      measurement: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
    },
    {
      timestamps: false
    }
  );


  Ingredient.associate = function (models) {
    Ingredient.belongsTo(models.Recipe, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Ingredient;
};