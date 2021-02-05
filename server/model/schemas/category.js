const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
    },
    products: {
        type: [
            mongoose.Schema.Types.ObjectId
        ],
        default: []
    }
}, { timestamps: true})

const Category = mongoose.model('categorie', mongooseSchema);

module.exports = Category;