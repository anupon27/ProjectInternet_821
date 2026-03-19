const express = require('express')
const router = express.Router()
const controller = require('../controller/Items')

router.get('/:id', controller.getBYIDItems)

module.exports = router