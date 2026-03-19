const modelitems = require('../models/Items')


const getBYIDItems = async (req, res, next) => {
    try {
        const items = await modelitems.getBYIDItems(req.params.id)
        if (!items) return res.status(404).json({ message: 'ไม่พบ ID ของครุภัณฑ์ที่ท่านหา' })
        res.json(items)
    } catch (error) {
        next(error)
    }
}

module.exports = {getBYIDItems}