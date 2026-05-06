const express = require('express')
const router = express.Router()


// Schema design
const User = require('../models/user.model')

// bcrypt
const bcrypt = require('bcryptjs');
const session = require('express-session')

//email
const sendEmail = require('../gmail.js')

// express-session
router.use(session({
    secret: 'sumitjadhav',
    resave: false,
    saveUninitialized: false,
}))



router.get('/',(req,res)=>{
    res.render('home.ejs')
});

router.get('/register', (req, res) => {
    res.render('Registration_page')
})

router.post('/registeruser', async (req, res) => {
    try {
        const { name, email, age, password } = req.body;

        // Check existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            name,
            email,
            age,
            password: hashedPassword
        });

        await user.save();
        res.status(201).json({
            message: 'User registered successfully',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Registration failed' });
    }
});

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/loginuser', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate 4-digit OTP
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        
        // Store OTP and user in session
        req.session.otp = otp;
        req.session.user = {
            id: user._id,
            name: user.name,
            email: user.email,
            age: user.age
        };
        
        console.log('Generated OTP:', otp);
        console.log('Session user:', req.session.user);
        
        // Redirect to OTP page
        sendEmail(otp,user.email)
        res.redirect('/accept_otp');
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/accept_otp', (req, res) => {
    if (req.session.user && req.session.otp) {
        res.render('accept_otp', { 
            email: req.session.user.email,
            otp: req.session.otp // For testing only - remove in production
        });
    } else {
        res.redirect('/login');
    }
});

router.post('/verifyotp', (req, res) => {
  try {
    if (!req.session.user || !req.session.otp) {
      return res.redirect('/login');
    }

    const { otp1, otp2, otp3, otp4 } = req.body;

    if (!otp1 || !otp2 || !otp3 || !otp4) {
      return res.render('accept_otp', {
        error: 'Please enter all 4 digits.',
        email: req.session.user.email
      });
    }

    const enteredOtp = `${otp1}${otp2}${otp3}${otp4}`;

    if (enteredOtp === req.session.otp) {
      delete req.session.otp;
      return res.redirect('/profile');
    }

    return res.render('accept_otp', {
      error: 'Invalid OTP.',
      email: req.session.user.email
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server error');
  }
});
router.get('/profile', (req, res) => {
    if (req.session.user) {
        res.render('profile', { data: req.session.user });
    } else {
        res.redirect('/login');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/profile');
        }
        res.redirect('/');
    });
});

module.exports = router
