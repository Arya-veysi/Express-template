// baseRoutes.js
const express = require('express')
const router = express.Router()
const baseController = require('../controllers/baseController')

router.get('/', baseController.get)
router.post('/', baseController.post)

module.exports = router
