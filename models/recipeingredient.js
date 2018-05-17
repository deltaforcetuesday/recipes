
module.exports = function(sequelize, DataTypes) {

var RecipeIngredient = sequelize.define('RecipeIngredient', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: DataTypes.STRING
  });

  return RecipeIngredient;

}