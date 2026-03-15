const express = require('express');
const routerDel = express.Router();
//Get path สำหรับดึงข้อมูลทั้งหมดจากตาราง accounts

module.exports = (connection) => {
    routerDel.delete('/Accounts/:Id', async (req, res) => {
        try {
            const Id = req.params.Id;
            const results = await connection.query('DELETE FROM Accounts WHERE Id = ?', [Id]);
            if (results[0].affectedRows == 0) {
                throw { status: 404, message: 'Account not found' }
            }
            res.json({ message: 'Account deleted successfully' })
        } catch (error) {
            console.error('Error Deleting Account:', error.message);
            let statusCode = error.statusCode || 500;
            res.status(statusCode).json({
                message: 'Error Deleting Account',
                error: error.message
            })

        }
    })
    return routerDel
}
