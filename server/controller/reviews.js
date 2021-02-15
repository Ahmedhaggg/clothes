const reviews = require('../model/reviews')

exports.getReviews = (req, res, next) => {
    reviews.getReviews()
        .then(allReviews => res.status(200).json({allReviews}))
        .catch(message => res.status(400).json({message}))   
}
exports.addReview = (req, res, next) => {
    const { userId, productId , stars, comment } = req.body;
    reviews.addReview({ userId, productId , stars, comment })
    .then(message => res.status(200).json({message}))
    .catch(message => res.status(message.status).json({message: message.message}))
}
exports.updateReview = (req, res, next) => {
    const { productId, userId, newComment, newStars } = req.body
    const date = new Date();
    reviews.updateReview({ productId, userId, newComment, newStars, date })
        .then(message => res.status(201).json({message}))
        .catch(message => res.status(500).json({message}))
}
exports.deleteReview = (req, res, next) => {
    const { productId, userId } = req.body
    reviews.deleteReview({ productId, userId })
        .then(message => res.status(201).json({message}))
        .catch(message => res.status(500).json({message}))
}
exports.getProductReview = (req, res, next) => {
    reviews.getProductReview(req.body.productId)
        .then(productReviews => res.status(200).json({productReviews}))
        .catch(message => res.status(400).json({message}))
}