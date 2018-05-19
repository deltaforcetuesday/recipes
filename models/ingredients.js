
module.exports = function(sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredient", {
      ingredient: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      /*
      recipeId: {
          type: DataTypes.INTEGER,
          references: {
              model: "Recipe",
              key: 'id'
          }
      }, */
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        len: [1]
      },
      measurement: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
      },
    },

       {timestamps: false }
    
  );
  

    Ingredient.associate = function(models) {
      Ingredient.belongsTo(models.Recipe, {
        foreignKey: {
          allowNull: false
        }
      });
    };
/*
    Ingredient.associate = function(models) {
      Ingredient.belongsToMany(models.Recipe, {
        through: RecipeIngredient
        });
    }; */

    return Ingredient;
  };
  