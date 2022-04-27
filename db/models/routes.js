const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Routes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: author });
      // define association here
    }
  }
  Routes.init({
    title: DataTypes.STRING,
    city: DataTypes.STRING,
    length: DataTypes.STRING,
    rating: DataTypes.STRING,
    description: DataTypes.STRING,
    author: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Routes',
  });
  return Routes;
};
