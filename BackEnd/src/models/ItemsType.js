const { getConnection } = require('../config/db')

const getBYIDItemsType = async (Id_Items) => {
    const connection = await getConnection()
    const sql = `
        SELECT DuraticlesName
        FROM Durable_articles
        WHERE DuraticelsID = ?
    `
    const [rows] = await connection.query(sql, [Id_Items])
    return rows[0]
}

module.exports = { getBYIDItemsType }
