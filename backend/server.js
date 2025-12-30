const express = require('express')
const app = express()

PORT=5000;

app.get('/',(req,res)=>{
    res.send('homepage')
});
app.get('/about',(req,res)=>{
    res.send('About us page')
});

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
