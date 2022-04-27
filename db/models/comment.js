const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Route }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Route, { foreignKey: 'route_id' });
      // define association here
    }
  }
  Comment.init({
    body: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    route_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
