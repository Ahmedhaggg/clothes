const mongoose = require('mongoose');


const OrderSchema = mongoose.Schema({
    productsList: {
        type: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "product",
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                }
            
            }
        ],
        required: true

    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    amount: {
        type: Number,
        required: true
    },
    charge: {
        type: Boolean,
        default: false
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
}, { timestamps: true })


const Order = mongoose.model('order', OrderSchema);

module.exports = Order;