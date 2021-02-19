const { validationResult } = require('express-validator');
exports.getRank = list => {
    let count = 0;
    let stars = 0;
    list.forEach(rank => {
        count++;
        stars += rank.stars 
    })
    return stars / count;
} 

exports.checkErr = (req, res, next) => {
    console.log(req.body)
    if (validationResult(req).array().length > 0) {
        return res.status(409).json({
            message: validationResult(req).array()
        })
    }
    next()
} 