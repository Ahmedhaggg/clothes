exports.index = (req, res, next) => {
    res.render('index')
}
exports.login = (req, res, next) => {
    res.render('signin')
}
exports.signup = (req, res, next) => {
    res.render('signup')
}
exports.orders = (req, res, next) => {
    res.render('orders')
}
exports.cart = (req, res, next) => {
    res.render('cart')
}
exports.checkout = (req, res, next) => {
    res.render('checkout')
}
exports.profile = (req, res, next) => {
    res.render('profile')
}
exports.admin = (req, res, next) => {
    res.render('admin')
}
exports.adminProducts = (req, res, next) => {
    res.render('adminproducts')
}
exports.addProduct = (req, res, next) => {
    res.render('addproduct')
}