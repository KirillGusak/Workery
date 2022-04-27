const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'author' });
      // define association here
    }
  }
  Route.init({
    title: DataTypes.STRING,
    city: DataTypes.STRING,
    length: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    author: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};
