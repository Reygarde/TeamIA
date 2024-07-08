document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const conversationId = urlParams.get('conversationId');

    // Fetch messages for the conversation
    function fetchMessages() {
        fetch(`http://localhost:5000/api/conversations/${conversationId}/messages`, {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const chatMessagesElement = document.getElementById('chatMessages');
                chatMessagesElement.innerHTML = ''; // Clear existing messages
                data.messages.forEach(message => {
                    const messageElement = document.createElement('div');
                    messageElement.className = 'message';
                    messageElement.innerHTML = `
                        <strong>${message.sender.fullName}</strong>: ${message.content}
                        <span class="text-muted small">${new Date(message.timestamp).toLocaleTimeString()}</span>
                    `;
                    chatMessagesElement.appendChild(messageElement);
                });
            } else {
                console.error('Failed to fetch messages.');
            }
        })
        .catch(error => {
            console.error('Error fetching messages:', error);
        });
    }

    // Send a new message
    document.getElementById('sendMessageForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const messageInput = document.getElementById('messageInput');
        const messageContent = messageInput.value;

        fetch(`http://localhost:5000/api/conversations/${conversationId}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ content: messageContent })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                messageInput.value = ''; // Clear the input
                fetchMessages(); // Refresh messages
            } else {
                console.error('Failed to send message.');
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
    });

    // Initial fetch of messages
    fetchMessages();
});
