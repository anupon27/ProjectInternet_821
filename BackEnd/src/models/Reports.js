const {getConnection} = require('../config/db')

const getAllReports = async () => {
    const connection = await getConnection()
    
    const sql = `
        SELECT Report.*, Accounts.User 
        FROM Report Report
        JOIN Accounts Accounts ON Report.ID_Account = Accounts.Id_Accounts
    `
    const [rows] = await connection.query(sql)
    return rows
}

const getBYIDReports = async (ID_Account) => {
    const connection = await getConnection()
    const sql = `
        SELECT Report.*, Accounts.User 
        FROM Report Report
        JOIN Accounts Accounts ON Report.ID_Account = Accounts.Id_Accounts
        WHERE Report.ID_Account = ?
    `
    const [rows] = await connection.query(sql, [ID_Account])
    return rows[0]
}

const createReports = async (reportData) => {
    const connection = await getConnection()
    const { Itemsnames, Report_Discription, ID_Account } = reportData
    
    const sql = 'INSERT INTO Report (Itemsnames, Report_Discription, ID_Account) VALUES (?, ?, ?)'
    const [results] = await connection.query(sql, [Itemsnames, Report_Discription, ID_Account])
    return results
}


//ยังทำไม่เสร็จ รอ Status

const updateReports = async (ID_Account, reportData) => {
    const connection = await getConnection()
    const {Itemsnames , Report_Discription} = reportData
    const Results = await connection.query('UPDATE Report SET Itemsnames = ?, Report_Discription = ? WHERE ID_Account = ?', [Itemsnames, Report_Discription, ID_Account])
    return Results
}


module.exports = {getAllReports, getBYIDReports, createReports, updateReports}