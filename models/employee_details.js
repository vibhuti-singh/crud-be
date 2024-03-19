'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee_details.init({
    employee_id: DataTypes.INTEGER,
    designation: DataTypes.STRING,
    salary: DataTypes.STRING,
    account_no: DataTypes.STRING,
    years_of_experience: DataTypes.INTEGER,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'employee_details',
  });
  return employee_details;
};