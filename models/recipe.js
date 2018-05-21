module.exports = function (sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: true,
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
  }, {
    timestamps: false
  });

  Recipe.associate = function (models) {
    Recipe.belongsTo(models.Chef, {
      foreignKey: {
        allowNull: false
      }
    });
    Recipe.hasMany(models.Ingredient, {
      onDelete: "cascade"
    });

  };

  return Recipe;
};