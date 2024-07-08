const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
    members: {
        type: [String],
        required: true
    },
    messages: [
        {
            sender: String,
            text: String,
            timestamp: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

const Conversation = mongoose.model('Conversation', ConversationSchema);

module.exports = Conversation;
