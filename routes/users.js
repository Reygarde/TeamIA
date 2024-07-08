const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Route pour obtenir les informations de l'utilisateur connecté
router.get('/me', async (req, res) => {
    try {
        const userId = req.query.userId; // Vous pouvez aussi utiliser req.userId si vous avez un middleware d'authentification
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Autres routes (register, login, etc.)
router.post('/register', async (req, res) => {
    //...
});

router.post('/login', async (req, res) => {
    //...
});

module.exports = router;
