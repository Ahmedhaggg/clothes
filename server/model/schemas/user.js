const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 30
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 30
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        min: 6,
        max: 14
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    city: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin", "publisher"],
        default: "user"
    },
    coverImg: {
        type: String,
        default: "cover.png"
    },
    profileImg: {
        type: String,
        default: "user.png"
    }    
}, { timestamps: true })

const User = mongoose.model("user", userSchema)
module.exports = User ;