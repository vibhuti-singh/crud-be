const { DataTypes } = require('sequelize');
const db = require('../db')
const employee_details = require("./employee_details")
const Employees = db.sequelize.define(
    'employees',
    {
        employee_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ename: {
            type: DataTypes.STRING,
            allownull: false
        },
        employee_age: {
            type: DataTypes.STRING,
            allownull: false
        },
        fname: {
            type: DataTypes.STRING,
            allownull: false
        }
    },
    {
        tableName: 'employees',
        timestamps: false
    }
);

// try {
//     Employees.belongsTo(employee_details ,{foreignKey:'employee_id',targetKey: 'employee_id'})
// } catch (error) {
//     throw new (error)
// }
module.exports = Employees;