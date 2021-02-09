const orderModel = require('../model/orders')
const stripe = require('stripe')('sk_test_51HkkefDHNiYh4mtD1YXl3fpM6wfVvRTWD81ANICazNdPOYb2mwik18G4dbTNfZK0E7oJq7JbW5r5qXPHrRqS0lkI00VgwQTR2V')
exports.getOrders = (req, res, next) => {
    orderModel.getOrders()
    .then(orders => res.status(200).json({orders}))
    .catch(message => res.status(500).json({message}))
}
exports.addOrder = (req, res, next) => {
    stripe.charges.create(
        {
            amount: req.body.amount * 100,
            source: req.body.token,
            currency: "usd"
        }
    ).then( charge => {
        const { receipt_url, id,  amount } = charge;
        const  paymentId = id;
        const { productsList, userId, quantity, address } = req.body;
        const data = { receipt_url, paymentId, amount, productsList , userId, quantity, address  };
        orderModel.addOrder(data)
        .then(result => {
            res.status(200).json({
                result
            })
        })
        .catch(err => {
            res.status(404).json({
                err
            })
        })
    }).catch( err => {
        res.status(404).json({
            err,
            data: "invalid token"
        })
    })
}
exports.deleteOrder = (req, res, next) => [
    orderModel.deleteOrder(req.body.id)
        .then(message => res.status(200).json({message}))
        .catch(message => res.status(500).json({message}))
]
