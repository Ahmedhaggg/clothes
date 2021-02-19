const products = require('../model/products');
const slugify = require('slugify');
const fs = require('fs');
const { check , validationResult} = require('express-validator');
let uploadsPath =  __dirname.replace("controller", "uploads") + '\\' ;

/* validation */


exports.getProduct = (req, res, next) => {
    products.getProduct(req.params.productSlug)
        .then(product => res.status(200).json(product))
        .catch(message => res.status(400).json(message))
}

exports.addProduct = (req, res, next) => {
    if (!req.file) {
        res.status(400).json({message: "you should select file"})
    }
    let { name,  category, colors, price, discount  } = req.body;
    console.log(colors)
    colors = colors.split(",")
    let productImage = req.file.filename;
    const slug = slugify(name)
    products.addProduct({name, slug , category , price , discount, productImage, colors})
        .then(message => res.status(201).json({message}))
        .catch( async message => 
            await fs.unlink(uploadsPath + req.file.filename, (err) => {
                if (err) {
                    return res.status(400).json({message: "something went wrong"});
                };
                console.log(message)
                res.status(400).json({message});
            })
        )
}
exports.deletProduct = (req, res, next) => {
    products.deletProduct(req.body.id)
        .then( async result =>
            await fs.unlink(uploadsPath + result, (err) => {
                if (err) {
                    return res.status(400).json({err});
                }
                res.status(200).json({message: "product id deleted"})
            }) 
        )
        .catch(err => res.status(400).json({message: err}))
}
exports.getProducts = (req, res, next) => {
    products.getProducts()
        .then(products => res.status(200).json({products}))
        .catch(message => res.status(400).json({message}))
}
exports.updateProduct = (req, res, next) => {
    let { newDate, id } = req.body;
    console.log(newDate)
    products.updateProduct(id ,newDate)
        .then(result => res.status(200).json({message: result}))
        .catch(err => res.status(400).json({message: err}))
}
exports.updateProductImage = (req, res, next) => {
    if (!req.file.filename) {
        res.status(400).json({message: "you should select file"});
        return ;
    };
    let { id } = req.body;
    products.updateProductImage(id, req.file.filename)
        .then(async productImage => 
            await fs.unlink(uploadsPath + productImage, err => {
                if (err) 
                    return res.status(200).json({message: "can't remove last image of this product"})
                return res.status(200).json({message: "product is updated"})
            })
        )
        .catch(async message => {
            await fs.unlink(uploadsPath + req.file.filename, err => {
                return res.status(200).json({message})
            })
        })
}

