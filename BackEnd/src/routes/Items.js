const express = require('express')
const router = express.Router()
const controller = require('../controller/ItemsType')

router.get('/:id', controller.getBYIDItemsType)

module.exports = router