const user = require('../model/user')
const jwt = require('jsonwebtoken')
const { check, validationResult} = require('express-validator')
exports.signin = (req, res, next) => {
    const {email, password} = req.body
    user.signin({email, password})
        .then( async data => {
            let token = await jwt.sign({_id: data._id, email: data.email}, process.env.JWT_SECRET, {expiresIn: "24h"})
            res.status(200).json({
                token,
                data
            })
        })
        .catch( err => {
            console.log("err is hasbeen" + err)
            res.status(409).json({
                param: "validData",
                message: err
            })
        })
}

exports.signup = (req, res, next) => {
    console.log(req.body)
    const {firstName, lastName, userName, gender, city ,email, password} = req.body;
    user.signup({firstName, lastName, userName, gender, city ,email, password})
        .then( result => res.status(201).json(result))
        .catch( err => {
            res.status(409).json({
                message: err
            })
        })
}

exports.verfiySignin = (req, res, next) => {
    let token = req.headers.authorization
    try {
        let user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {_id: user._id, email: user.email}
    } catch (error) {
        return res.status(404).json({user: false})
    }
}

exports.signupValidation = [
    check("firstName").not().isEmpty().withMessage("can't be empty")
    .isLength({min: 3, max: 30}).withMessage("must be > 3 letters and < 30 letters"),
    check("lastName").not().isEmpty().withMessage("can't be empty")
    .isLength({min: 3, max: 30}).withMessage("must be > 3 letters and < 30 letters"),
    check("userName").not().isEmpty().withMessage("can't be empty")
    .isLength({min: 3, max: 30}).withMessage("must be > 6 letters and < 14 letters")
    ,
    check("email").not().isEmpty().withMessage("can't be empty")
    .isEmail().withMessage("can't be email"),
    check("password").not().isEmpty().withMessage("can't be empty")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/).withMessage("must match A-za-z0-9"),
    check("gender").not().isEmpty().withMessage("can't be empty"),
    check("city").not().isEmpty().withMessage("can't be empty")

]
exports.signinValidation = [
    check("email").not().isEmpty().withMessage("can't be empty")
    .isEmail().withMessage("can't be email"),
    check("password").not().isEmpty().withMessage("can't be empty")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/).withMessage("must match A-za-z0-9")
]
