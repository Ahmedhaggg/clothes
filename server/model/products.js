const mongoose = require('mongoose');
const Product = require('./schemas/product');
const Category = require('./schemas/category');
const ProductReview = require('./schemas/review');
const helperFs = require('../helper/helperFunctions');
const slugify = require('slugify');


exports.getProduct = productSlug => {
    return new Promise((resolve, reject) => {
        return Product.findOne({slug: productSlug})
            .then(result => {
                if (result) {
                    return ProductReview.findOne({productId: result._id})
                        .then(review => {
                            resolve({
                                product: result,
                                totalRank: helperFs.getRank(review.reviews),
                                reviewsLength: review.reviews.length,
                                reviews: review.reviews
                            })
                        })
                        .catch(err => reject(result))
                } else {
                    reject('product is not found')
                }
            })
    })
}
/*
    1- add product
    2- check if category defined or no
    3- add new category or update category 
    4 - add new product reviews
*/
exports.addProduct = data => {
    return new Promise((resolve, reject) => {
        let newProduct = new Product(data);
        return newProduct.save()
            .then(product => {
                return Category.findOneAndUpdate({name: data.category}, {$addToSet : {products: product._id}})
                    .then(result => {
                        if (result) {
                            return Category.findOneAndUpdate({name: data.category}, {$addToSet : {products: product._id}})
                                .then(() => resolve("the product has been added successfully"))
                                .catch(err => reject(err))
                        } else {
                            let slug = slugify(data.category)
                            let categoryInfo = {
                                name : data.category,
                                slug,
                                products: [product._id]
                            }
                            let newCategory = new Category(categoryInfo)
                            return newCategory.save()
                                .then(() => {
                                    const newProductReview = new ProductReview({productId: product._id});
                                    newProductReview.save()
                                        .then(() => resolve("The product has been added successfully"))
                                        .catch(() => reject("some thing went wrong"))
                                })
                                .catch(err => reject(err))
                        }
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
            .catch(err => reject(err))
    })
} 
exports.deletProduct =  id => {
    return new Promise((resolve, reject) => {
        return Product.findOneAndDelete({_id: mongoose.Types.ObjectId(id)})
            .then(result => {
                if (result)
                    resolve(result.productImage);
                else 
                    reject("product is not found");
            })
            .catch(() => reject("something went wrong") )
    })
}
exports.getProducts = () => {
    return new Promise((resolve, reject) => {
        Product.find()
        .then(products => resolve(products))
        .catch(err => reject("something is happend"))
    })
}
exports.updateProduct = (id, newDate) => {
    return new Promise((resolve, reject) => {
        return Product.findByIdAndUpdate(id, newDate)
            .then(res => {
                if (res) resolve("success to updata this product")
                else reject("can't update this product")
            })
            .catch(err => reject("product is not found"))
    })
}
exports.updateProductImage =  (id, productImage) => {
    return new Promise((resolve, reject) => {
        return Product.findByIdAndUpdate(id, {$set:{productImage}}, (err, doc) => {
            if (err) {
                reject("Something went wrong");
            } else {
                resolve(doc.productImage)
            }
        })
    })
}