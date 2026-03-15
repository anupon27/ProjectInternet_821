const {getConnection} = require('../config/db')

const getAllAccounts = async () => {
    const connection = await getConnection()
    const [rows] = await connection.query('SELECT * FROM Accounts')
    return rows
}

const getBYIDAccounts = async (id) => {
    const connection = await getConnection()
    const [rows] = await connection.query('SELECT * FROM Accounts WHERE id = ?', [id])
    return rows[0]
}

const createAccounts = async (accountData) => {
    const connection = await getConnection()
    const {Fristname, Lastname, Age, User, Password, Email} = accountData
    const Results = await connection.query('INSERT INTO Accounts (Fristname, Lastname, Age, User, Password, Email) VALUES (?, ?, ?, ?, ?, ?)', [Fristname, Lastname, Age, User, Password, Email])
    return Results
}

const updateAccounts = async (id, accountData) => {
    const connection = await getConnection()
    const {Fristname, Lastname, Age, User, Password, Email} = accountData
    const Results = await connection.query('UPDATE Accounts SET Fristname = ?, Lastname = ?, Age = ?, User = ?, Password = ?, Email = ? WHERE id = ?', [Fristname, Lastname, Age, User, Password, Email, id])
    return Results
}

const deleteAccounts = async (id) => {
    const connection = await getConnection()
    const Results = await connection.query('DELETE FROM Accounts WHERE id = ?', [id])
    return Results
}

module.exports = {getAllAccounts, getBYIDAccounts, createAccounts, updateAccounts, deleteAccounts}