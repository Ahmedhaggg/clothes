const router = require('express').Router();
const orderController = require('../controller/orders')

router.get('/', orderController.getOrders)
router.post('/add', orderController.addOrder)
router.delete('/delete', orderController.deleteOrder)
module.exports =  router;