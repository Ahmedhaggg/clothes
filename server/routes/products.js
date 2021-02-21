const router = require('express').Router();
const productsController = require('../controller/products');
const uploader = require('../uploader/uploadAdmin')
const helper = require('../helper/helperFunctions')

router.get('/:productSlug', productsController.getProduct)
router.post('/add', (req, res, next)=> {
    console.log(req.body)
    console.log(req.headers)
}, uploader.uploadProductImage, productsController.addProduct)
router.get('/', productsController.getProducts)
router.delete('/delete',productsController.deletProduct)
router.put('/update', productsController.updateProduct)
router.put('/update/image', uploader.uploadProductImage, productsController.updateProductImage)
module.exports = router;
