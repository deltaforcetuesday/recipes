

module.exports = function(sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipe", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    /*  chefId: {
          type: DataTypes.INTEGER,
          references: {
              model: "Chef",
              key: 'id'
          }
      }, */
      instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      imageLink: {
          type: DataTypes.STRING,
          allowNull: true
      },
      prepTime: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              min: 0,
              max: 300
          }
      },
      method: {
          type: DataTypes.STRING,
          allowNull: true
      }
    });

    Recipe.associate = function(models) {
        Recipe.belongsTo(models.Chef, {
          foreignKey: {
            allowNull: false
          }
        });
        Recipe.hasMany(models.Ingredient, {
          onDelete: "cascade"
        });
       /* Recipe.belongsToMany(models.Ingredient, {
          through: RecipeIngredient
        }) */
      };
  
    return Recipe;
  };
  