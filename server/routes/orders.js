const router = require('express').Router();
const orderController = require('../controller/orders')
router.post('/add', orderController.addOrder)

module.exports =  router;