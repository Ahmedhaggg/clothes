const orderModel = require('../model/orders')
const stripe = require('stripe')('sk_test_51HkkefDHNiYh4mtD1YXl3fpM6wfVvRTWD81ANICazNdPOYb2mwik18G4dbTNfZK0E7oJq7JbW5r5qXPHrRqS0lkI00VgwQTR2V')
exports.addOrder = (req, res, next) => {
    console.log(req.body)
    stripe.charges.create(
        {
            amount: req.body.amount * 100,
            source: req.body.token,
            currency: "usd"
        }
    ).then( charge => {
        const { receipt_url, id,  amount } = charge;
        const  paymentId = id;
        const { productId, userId, quantity, address } = req.body;
        const data = { receipt_url, paymentId, amount, productId, userId, quantity, address  };
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
            err
        })
    })
}
