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
    static associate({ User, Comment }) {
      this.belongsTo(User, { foreignKey: 'author' });
      this.hasMany(Comment, { foreignKey: 'route_id' });
    }
  }
  Route.init({
    title: DataTypes.STRING,
    city: DataTypes.STRING,
    length: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    author: DataTypes.INTEGER,
    start: DataTypes.STRING,
    end: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};
