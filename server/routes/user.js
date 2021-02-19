const router = require('express').Router();
const userController = require('../controller/user')
const helper = require('../helper/helperFunctions')

router.post('/signin', userController.signinValidation , helper.checkErr , userController.signin)
router.post('/signup', userController.signupValidation , helper.checkErr , userController.signup)
router.post('/profile', userController.verfiySignin, (req, res) => {
    res.status(200).json({user : "profile"})
})

module.exports = router;