const express = require('express');
const routerDel = express.Router();
//Get path สำหรับดึงข้อมูลทั้งหมดจากตาราง accounts

module.exports = (connection) => {
    routerDel.delete('/Accounts/:Id', async (req, res) => {
    const Id = req.params.Id;
    const results = await connection.query('DELETE FROM Accounts WHERE Id = ?', [Id]);
    res.json({message: 'Account deleted successfully'})

})
    return routerDel
}
