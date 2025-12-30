const express = require('express')
const app = express()
require('dotenv').config();

PORT=5000;

// middleware
// static file serve
app.use(express.static('public/'))

// POST Method Data - Form Handling
app.use(express.urlencoded({extended:true}))

// JSON Data
app.use(express.json())

//Database Connection
var Connection = require('./config/db.js')
Connection()

app.get('/',(req,res)=>{
    // res.send('homepage')
     res.render(`Home.ejs`);
});

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
