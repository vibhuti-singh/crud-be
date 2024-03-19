const { DataTypes } = require('sequelize');
const db = require('../db')

const Employee_details = db.sequelize.define('employee_details',{
    designation: {
        type: DataTypes.STRING,
        allownull: true
    },
    salary: {
        type: DataTypes.STRING,
        allownull: true
    },
    account_no: {
        type: DataTypes.STRING,
        allownull: true
    },
    years_of_experience: {
        type: DataTypes.INTEGER,
        allownull: true
    },
    address: {
        type: DataTypes.STRING,
        allownull: true
    }
},
{
    timestamps: false,
    tableName: 'employee_details'
})

module.exports = Employee_details;