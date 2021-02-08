const mongoose = require('mongoose');

const ProductReviewsSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "product",
        required: true
    },
    reviews: {
        type : [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "user"
                },
                comment: String,
                stars: Number,
                date: {
                    type: Date,
                    def: new Date()
                }
            }
        ],
        def: []
    }
}, { timestamps: true})

const ProductReview = mongoose.model("review", ProductReviewsSchema);

module.exports = ProductReview;