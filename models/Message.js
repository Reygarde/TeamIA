const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    conversationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: String,
    timestamp: Date
});

module.exports = mongoose.model('Message', MessageSchema);
