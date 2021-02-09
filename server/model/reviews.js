const ProductReview = require('./schemas/review')
const helperFs = require('../helper/helperFunctions')
const Purchas = require('./schemas/Purchases')
const { $where } = require('./schemas/review')
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
                    return ;
                }
                resolve("no reviews")
            })
            .catch(() => reject("something went wrong"))
    })
}

/*
    1- check if user buy this product 
    2- check if user has review on this product 
    3- add review of user
*/
exports.addReview = data => {
    return new Promise((resolve, reject) => {
        return Purchas.findOne({productId: data.productId, userId: data.userId})
            .then(result => {
                if (!result) {
                    reject({message: "you have already reviewed and rated this product", status: 406})
                    return ;
                } 
                return ProductReview.findOne({productId: data.productId, reviews: {$elemMatch: {userId: data.userId}}})
                    .then(reviewResult => {
                        if (reviewResult) {
                            reject({message: "you have already reviewed and rated this product", status: 406})
                            return ;
                        }
                        return ProductReview.findByIdAndUpdate(id, { $addToSet: 
                                {reviews: { userId: data.userId ,comment: data.comment, stars: data.stars}}
                            })
                            .then(() => resolve("thank you for your intersts"))
                            .catch(() => reject({message: "something went wrong", status: 500}))
                    })
                    .catch(() => reject({message: "something went wrong", status: 500}))
            })
            .catch(() => reject({message: "something went wrong", status: 500}))
    })
}