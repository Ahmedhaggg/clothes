const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "product",
        required: true
    },
    totalStars: {
        type: Number,
        def: 0
    },
    reviewer: {
        type: Number,
        def : 0
    },
    reviews: {
        type : [
            {
                clientId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "user"
                },
                text: String,
                stars: Number
            }
        ]
    }
}, { timestamps: true})

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;