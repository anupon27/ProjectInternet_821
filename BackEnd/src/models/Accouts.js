const {getConnection} = require('../config/db')

const getAllAccounts = async () => {
    const connection = await getConnection()
    const [rows] = await connection.query('SELECT * FROM Accounts')
    return rows
}

const getBYIDAccounts = async (Id_Accounts) => {
    const connection = await getConnection()
    const [rows] = await connection.query('SELECT * FROM Accounts WHERE Id_Accounts = ?', [Id_Accounts])
    return rows[0]
}

const createAccounts = async (accountData) => {
    const connection = await getConnection()
    const {Fristname, Lastname, Age, User, Password, Email} = accountData
    const Results = await connection.query('INSERT INTO Accounts (Fristname, Lastname, Age, User, Password, Email) VALUES (?, ?, ?, ?, ?, ?)', [Fristname, Lastname, Age, User, Password, Email])
    return Results
}

const updateAccounts = async (Id_Accounts, accountData) => {
    const connection = await getConnection()
    const {Fristname, Lastname, Age, User, Password, Email} = accountData
    const Results = await connection.query('UPDATE Accounts SET Fristname = ?, Lastname = ?, Age = ?, User = ?, Password = ?, Email = ? WHERE Id_Accounts = ?', [Fristname, Lastname, Age, User, Password, Email, Id_Accounts])
    return Results
}

const deleteAccounts = async (Id_Accounts) => {
    const connection = await getConnection()
    const Results = await connection.query('DELETE FROM Accounts WHERE Id_Accounts = ?', [Id_Accounts])
    return Results
}

const getByUserAccounts = async (User) => {
    const connection = await getConnection()
    const [rows] = await connection.query('SELECT * FROM Accounts WHERE User = ?', [User])
    return rows[0]
}

module.exports = {getAllAccounts, getBYIDAccounts, createAccounts, updateAccounts, deleteAccounts, getByUserAccounts}