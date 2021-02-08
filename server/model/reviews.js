const ProductReview = require('./schemas/review')
const helperFs = require('../helper/helperFunctions')
exports.getReviews = () => {
    return new Promise((resolve, reject) => {
        return ProductReview.find()
            .then(productsReviews => {
                if (productsReviews.length > 0) {
                    /*
                        loop in productsReviews 
                        loop in reviews in every product
                        push every review in reviews
                    */
                    let reviews = [];
                    productsReviews.forEach(productReview => {
                        productReview.reviews.forEach(review => {
                            reviews.push({
                                productId : productReview.productId,
                                productLink : "/products/" + productReview.productId,
                                review: review
                            })
                        })
                    })
                    resolve(productReview)
                }
            })
            .catch(() => reject("something went wrong"))
    })
}

exports.addReview = data => {
    return new Promise((resolve, reject) => {
        
    })
}