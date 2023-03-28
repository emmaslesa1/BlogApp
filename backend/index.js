const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const authController = require('./controllers/authController')
const blogController = require('./controllers/blogController')
const multer = require('multer')

const app = express()

//connect to db
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URL, () => {
        console.log('DB is successfully connected')
    })

//routes and middlewares
app.use('/images', express.static('public/images'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authController)
app.use('/blog', blogController)


// multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images')
    },
    filename: function(req, file, cb){
        cb(null, req.body.filename)
    }
})

const upload = multer({
    storage: storage
})

app.post('/upload', upload.single("image"), async(req, res) => {
    return res.status(200).json({msg: "Successfully uploaded"})
})


//start our server
app.listen(process.env.PORT, () => {
    console.log('Server has been started successfully')
})