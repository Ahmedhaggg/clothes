const { findByIdAndDelete } = require('./schemas/order');
const Order = require('./schemas/order');

exports.getOrders = () => {
    return new Promise((resolve, reject) => {
        Order.find()
            .then(orders => resolve(orders))
            .catch(err => reject("siomething went wrong"))
    })
}
exports.addOrder = data => {
    return new Promise((resolve, reject) => {
        const newOrder = new Order(data);
        return newOrder.save()
            .then(() => resolve("order has been compeleted"))
            .catch(err => reject(err))
    })
}
exports.deleteOrder = id => {
    console.log(id)
    return new Promise((resolve, reject) => {
        return Order.findByIdAndDelete(id)
            .then(result => {
                if (result) {
                    resolve("success to delete your product")
                    return;
                }
                reject("product is not found")
            })
            .catch(() => reject("something went wrong"))
    })
}