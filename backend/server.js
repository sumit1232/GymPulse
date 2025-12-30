const express = require('express')
const app = express()
const cors = require('cors'); 

PORT=5000;

// ✅ FIX: Configure CORS properly
app.use(cors({
    origin: ['http://localhost:5173', 'https://gym-pulse-pearl.vercel.app'], // Your Vite dev server
    credentials: true
}));

// Alternative: Allow all origins (development only)
app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('homepage')
});
app.get('/about',(req,res)=>{
    res.send('About us page')
});
app.get('/product',(req,res)=>{
    res.send('PRoduct us page')
});

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
