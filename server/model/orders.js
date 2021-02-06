const { resolve } = require('path');
const Order = require('./schemas/order');


exports.addOrder = data => {
    return new Promise((resolve, reject) => {
        const newOrder = new Order(data);
        return newOrder.save()
            .then(() => resolve("order has been compeleted"))
            .catch(err => reject(err))
    })
}