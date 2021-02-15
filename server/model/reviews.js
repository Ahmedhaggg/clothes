const ProductReview = require('./schemas/review')
const helperFs = require('../helper/helperFunctions')
const Purchas = require('./schemas/Purchases')
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
                        return ProductReview.findOneAndUpdate({productId: data.productId}, { $addToSet: 
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

exports.updateReview = data => {
    return new Promise((resolve, reject) => {
        return ProductReview.findOneAndUpdate(
                    {productId: data.productId, reviews: {$elemMatch: {userId: userId}}},
                    {
                        $pull: { reviews: {userId : data.userId}},
                        $addToSet: {reviews: {userId: data.userId, comment: data.comment, stars: data.stars , date: data.date}}
                    }
                ).selected("reviews")
                .then(reviews => {
                    if (reviews) {
                        let newReview = reviews.find(el => el.userId = data.userId)
                        resolve(newReview);
                        return ;
                    }
                    reject("something went wrong")
                })
                .catch(() => reject("something went wrong"))
    })
}
/*
    check if user has review 
*/
exports.deleteReview = data => {
    return new Promise((resolve, reject) => {
        return ProductReview.findOneAndUpdate(
            {productId: data.productId, reviews: { $elemMatch: {userId: data.userId}}},
            {$pull: {userId: data.userId}}
        ).exec("reviews")
        .then(reviews => {
            if (reviews) {
                resolve("your review is deleted successfully")
                return ;
            }
            reject("something went wrong")
        })
        .catch(() => reject("something went wrong"))
    })
}
exports.getProductReview = productId => {
    return new Promise((resolve, reject) => {
        return ProductReview.findOne({productId})
            .then(productReview => {
                if (productReview) {
                    resolve({
                        productId,
                        totalRank: helperFs.getRank(productReview.reviews),
                        reviews: productReview.reviews
                    })
                    return ;
                }
                reject("something went wrong")
            })
            .catch(() => reject("something went wrong"))
    })
}