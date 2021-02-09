const mongoose = require('mongoose');

const purchasesSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    receipt_url: {
        type: String,
        required: true
    }, 
    address : {
        type: {
            zone: String,
            city: String
        },
        required: true
    }
}, { timestamps: true})

const Purchas = mongoose.model("purchese", purchasesSchema);
module.exports = Purchas;