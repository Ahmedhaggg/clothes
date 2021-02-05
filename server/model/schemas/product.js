const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    slug: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number
    },
    productImage: {
        type: String,
        required: true
    },
    colors: {
        type: Array,
        required: true,
    }
}, { timestamps: true})

const Product = mongoose.model("product", mongooseSchema);

module.exports = Product ;