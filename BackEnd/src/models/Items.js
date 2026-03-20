const { getConnection } = require('../config/db')

const getBYIDItemsType = async (Id_Items) => {
    const connection = await getConnection()
    const sql = `
        SELECT Durable_articles.*, DuraticlesName
        FROM Durable_articles
        WHERE Durable_articles.DuraticlesID = ?
    `
    const [rows] = await connection.query(sql, [Id_Items])
    return rows[0]
}

module.exports = {getBYIDItemsType}