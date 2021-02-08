const router = require('express').Router();
const reviewsController = require('../controller/reviews');
router.get('/', reviewsController.getReviews)
router.post('/add', reviewsController.addReview)
router.put('/update', reviewsController.updateReview)
router.delete('/delete', reviewsController.deleteReview)
router.get('/:productId', reviewsController.getProductReview)
module.exports = router;