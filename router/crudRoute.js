const express = require("express");
const crudRoutes = express.Router()
const Employees = require("../model/employee")
const Employee_details = require("../model/employee_details");
crudRoutes.route("/all").get(async (req, res) => {
    try {
        let allEmp = await Employees.findAll({
            include: {
                model: Employee_details
            }
        });
        if (!allEmp) {
            throw new Error("No data available");
        }
        res.send(allEmp);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

crudRoutes.route("/:id").get(async (req, res) => {
    try {
        let emp = await Employees.findOne({
            where: {
                employee_id: req.params.id,
            },
            include: {
                model: Employee_details,
                required: false
            }
        },
        );
        // if (!emp) {
        //     throw new Error("No data available");
        // }
        res.send(emp);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

crudRoutes.route("/create").post(async (req, res) => {
    try {
        const createEmp = await Employees.create(req.body.employee);
        if (!createEmp) {
            throw new Error("Unable to create employee");
        }

        if (req.body.employee_details) {
            const createEmpDet = await Employee_details.create( req.body.employee_details);
            if (!createEmpDet) {
                throw new Error("Unable to create employee details");
            }
        }
        res.json({
            message: "successful!!!!!"
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
})

crudRoutes.route("/update/:id").put(async (req, res) => {
    try {
        let updateEmp = await Employees.update(req.body, {
            where: {
                employee_id: req.params.id,
            },
        })
        if (!updateEmp) {
            throw new Error("error in update")
        }
        res.json({
            msg: "update successfull!!!!!!"
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
})

crudRoutes.route("/delete/:id").delete(async (req, res) => {
    try {
        let deleteEmp = await Employees.destroy({
            where: {
                employee_id: req.params.id
            }
        })
        if (!deleteEmp) {
            throw new Error("error in deleting")
        } res.json({
            msg: "Removed!!!!"
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = crudRoutes;