const express = require("express");
const routerPost = express.Router();
const ValiDataAccouts = require('../ValiDataAcc/index')

module.exports = (connection) => {
    routerPost.post('/Accounts', async (req, res) => {
        try {
            const DataAcc = req.body
            
            const errors = ValiDataAccouts(DataAcc)
            if (errors.length > 0) {
                throw {
                    message: 'กรอกข้อมูลไม่ครบ',
                    errors: errors
                }
            }
            const results = await connection.query('INSERT INTO Accounts SET ?', DataAcc)
            console.log('results', results)
            res.json({
                message: 'Account created successfully',
                data: results[0]
            })
        }catch (error) {
            const errMassage = error.message || 'Error creating account'
            const errors = error.errors || []
            console.error('Error adding user:', error.message);
            res.status(400).json({
                message: errMassage,
                errors: errors
            })
            res.status(500).json({
                message: errMassage,
                errors: errors
            })
        }
    })
    return routerPost
}