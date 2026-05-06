const express = require('express')
const app = express()
const userRouter = require('./routes/userRoutes.js')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public/'))

// View engine setup (REQUIRED for .ejs)
app.set('view engine', 'ejs')
app.set('views', './views')

// DB connection
const connectDB = require('./config/db.js')
connectDB()



//Express Routing
// User Routes
app.use('/',userRouter)

app.listen(3000, () => {
    console.log('Server running on port 3000');
})