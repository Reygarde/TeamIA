const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Route pour envoyer un message
router.post('/send', async (req, res) => {
    try {
        const message = new Message(req.body);
        await message.save();
        res.status(201).send(message);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Route pour récupérer les messages
router.get('/:userId', async (req, res) => {
    try {
        const messages = await Message.find({ $or: [{ sender: req.params.userId }, { receiver: req.params.userId }] });
        res.status(200).send(messages);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
