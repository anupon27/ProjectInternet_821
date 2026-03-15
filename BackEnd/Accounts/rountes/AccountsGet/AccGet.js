const express = require('express');
const routerget = express.Router();

module.exports = (connection) => {
    //Get All EIEI
    routerget.get('/Accounts', async (req,res) => {
        try {
            const results = await connection.query('SELECT * FROM Accounts');
            res.json(results[0])
        } catch (error) {
            console.error('Error fetching accounts:', error.message);
            res.status(500).json({
                message: 'Error fetching accounts',
                error: error.message
            })
        }
    })

    //Get by Id NajaNunu

    routerget.get('/Accounts/:Id', async (req, res) => {
        try {
            let Id = req.params.Id
            const results = await connection.query('SELECT * FROM Accounts WHERE Id = ?', Id);
            if (results[0].length == 0) {
                throw { status: 404, message: 'Account not found' }
            }
            res.json(results[0][0])
        } catch (error) {
            console.error('Error fetching account:', error.message);
            let statusCode = error.status || 500;
            res.status(statusCode).json({
                message: 'Error fetching account',
                error: error.message
            })

        }
    })
    return routerget
}
