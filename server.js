const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const User = require('./models/User');
const Conversation = require('./models/Conversation');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chatboot', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

// Serve static files from src directory
app.use(express.static(path.join(__dirname, 'src')));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

// Serve the HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'html', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'html', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'html', 'register.html'));
});

// Register endpoint
app.post('/api/users/register', async (req, res) => {
    const { fullName, email, username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullName, email, username, password: hashedPassword });
        await newUser.save();
        res.status(201).send({ message: 'User registered successfully.' });
    } catch (error) {
        res.status(500).send({ message: 'Error registering user.' });
    }
});

// Login endpoint
app.post('/api/users/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: 'Invalid email or password.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({ message: 'Invalid email or password.' });
        }

        req.session.user = user;
        res.send({ message: 'Logged in successfully.' });
    } catch (error) {
        res.status(500).send({ message: 'Error logging in.' });
    }
});

// Get user info endpoint
app.get('/get-user-info', (req, res) => {
    if (req.session.user) {
        res.send({ success: true, user: req.session.user });
    } else {
        res.send({ success: false, message: 'Not authenticated' });
    }
});

// Fetch conversations endpoint
app.get('/api/conversations', async (req, res) => {
    if (req.session.user) {
        try {
            const conversations = await Conversation.find({ members: req.session.user.email });
            console.log('Fetched conversations:', conversations);
            res.send(conversations);
        } catch (error) {
            console.error('Error fetching conversations:', error);
            res.status(500).send({ message: 'Error fetching conversations.' });
        }
    } else {
        res.status(401).send({ message: 'Not authenticated' });
    }
});

// Invite endpoint to create a new conversation
app.post('/api/conversations/invite', async (req, res) => {
    const { userEmail, invitedEmail } = req.body;

    try {
        const conversation = new Conversation({
            members: [userEmail, invitedEmail],
            messages: []
        });
        await conversation.save();
        res.send({ message: 'Invitation sent successfully.' });
    } catch (error) {
        console.error('Error creating conversation:', error);
        res.status(500).send({ message: 'Error creating conversation.' });
    }
});

// Logout endpoint
app.post('/api/users/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send({ message: 'Error logging out.' });
        }
        res.send({ message: 'Logged out successfully.' });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
