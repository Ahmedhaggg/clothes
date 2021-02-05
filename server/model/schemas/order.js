const mongoose = require('mongoose');


const OrderSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: [ "noSent", "isSent"],
        default: "noSent"
    },
    price: {
        type: Number,
        required: true
    },
    pay: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


const Order = mongoose.model('order', OrderSchema);

module.exports = Order;