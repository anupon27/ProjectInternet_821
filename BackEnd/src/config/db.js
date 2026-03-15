const mysql = require('mysql2/promise')

let connection = null

const getConnection = async () => {
    if (!connection) {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || 'LoveMySQL',
            database: process.env.DB_NAME || 'webdb',
            port: parseInt(process.env.DB_PORT) || 8820
        })
    }
    return connection
}
module.exports = {getConnection}