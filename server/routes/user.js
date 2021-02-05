const router = require('express').Router();
const userController = require('../controller/user')


router.post('/signin', userController.signinValidation , userController.checkErr , userController.signin)
router.post('/signup', userController.signupValidation , userController.checkErr , userController.signup)
router.post('/profile', userController.verfiySignin, (req, res) => {
    res.status(200).json({user : "profile"})
})

module.exports = router;