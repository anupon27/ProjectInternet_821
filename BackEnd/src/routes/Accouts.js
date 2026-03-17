const express = require('express');
const router = express.Router();
const controller = require('../controller/Accounts')

router.get('/', controller.getAllAccounts)
router.get('/:id', controller.getBYIDAccounts)
router.post('/', controller.createAccounts)
router.put('/:id', controller.updateAccounts)
router.delete('/:id', controller.deleteAccounts)
router.post('/login', controller.loginAccounts)

module.exports = router