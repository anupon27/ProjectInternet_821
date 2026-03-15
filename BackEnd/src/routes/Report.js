express = require('express');
const router = express.Router();
const controller = require('../controller/Reports')

router.get('/', controller.getAllReports)
router.get('/:id', controller.getBYIDReports)
router.post('/', controller.createReports)
router.put('/:id', controller.updateReports)

module.exports = router