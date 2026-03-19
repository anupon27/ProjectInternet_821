const { getConnection } = require('../config/db')

const getBYIDItems = async (Id_Items) => {
    const connection = await getConnection()
    const sql = `
        SELECT Items.*, Item_name , Stock
        FROM Items
        WHERE Items.Id_Items = ?
    `
    const [rows] = await connection.query(sql, [Id_Items])
    return rows[0]
}

module.exports = {getBYIDItems}