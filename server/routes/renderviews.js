const router = require('express').Router();
const renderViewsController = require('../controller/renderviews')
router.get('/', renderViewsController.index)
router.get('/login', renderViewsController.login)
router.get('/signup', renderViewsController.signup)
router.get('/orders', renderViewsController.orders)
router.get('/cart', renderViewsController.cart)
router.get('/checkout', renderViewsController.checkout)
router.get('/profile', renderViewsController.profile)
router.get('/admin', renderViewsController.admin)
router.get('/admin/products', renderViewsController.adminProducts)
router.get('/admin/products/add', renderViewsController.addProduct)


module.exports = router