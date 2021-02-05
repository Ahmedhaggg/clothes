const express = require('express');
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
const env = require('dotenv')

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(cors())


env.config()
// connect with db
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}
mongoose.connect('mongodb+srv://travels:AhmedHaggag@12345@cluster0.u5klm.mongodb.net/clothes?retryWrites=true&w=majority', options);

// import routes
const userRouter = require('./routes/user')
const productsRouter = require('./routes/products'); 
const { error } = require('console');
// using routes
app.use('/api/', userRouter)
app.use('/api/products/', productsRouter)
app.get('/test', (req, res, next) => {
    res.json({test: true, res: "success"})
})
app.use((err, req, res, next) => {
    res.send(error)
})
app.use((req, res, next) => {
    res.send('page is not found')
})

let port = 8888 || process.env.port
app.listen(port, () => {console.log("server runing")})