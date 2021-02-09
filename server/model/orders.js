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
    return new Promise((resolve, reject) => {
        return Order.findById(id)
            .then(result => {
                if (result.charge !== true) {
                    Order.findByIdAndDelete(id)
                        .then(() => resolve("success to delete your product"))
                        .catch(() => reject("product is not found"))
                    return;
                } 
                if (result.charge === true) {
                    reject("your order is charge, can't cancel your order");
                    return;
                }
                reject("product is not found");
            })
            .catch(() => reject("something went wrong"))
    })
}