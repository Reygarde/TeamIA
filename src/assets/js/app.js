document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Fetch user information
    fetch('http://localhost:5000/get-user-info', {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => {
        console.log('Response received: ', response);
        return response.json();
    })
    .then(data => {
        console.log('Data received: ', data);

        if (data.success) {
            const fullNameElement = document.getElementById('fullName');
            const emailElement = document.getElementById('email');
            const userAvatarDropdownElement = document.getElementById('userAvatarDropdown');

            if (fullNameElement && emailElement && userAvatarDropdownElement) {
                fullNameElement.textContent = data.user.fullName;
                emailElement.textContent = data.user.email;
                const avatarUrl = data.user.avatarUrl || './../assets/images/avatar/1.png';
                userAvatarDropdownElement.src = avatarUrl;

                // Store user email in sessionStorage for later use
                sessionStorage.setItem('currentUserEmail', data.user.email);
            } else {
                if (!fullNameElement) {
                    console.error('fullName element not found.');
                }
                if (!emailElement) {
                    console.error('email element not found.');
                }
                if (!userAvatarDropdownElement) {
                    console.error('userAvatarDropdown element not found.');
                }
            }
        } else {
            console.error('Failed to fetch user information.');
        }
    })
    .catch(error => {
        console.error('Error fetching user information:', error);
    });

    // Fetch user conversations
    fetch('http://localhost:5000/api/conversations', {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => {
        console.log('Conversations response: ', response);
        return response.json();
    })
    .then(data => {
        console.log('Conversations data: ', data);

        if (Array.isArray(data)) {
            const personalChatTabPane = document.getElementById('personalTab');
            if (personalChatTabPane) {
                personalChatTabPane.innerHTML = ''; // Clear existing content
                data.forEach(conversation => {
                    if (conversation && conversation.members && conversation.messages) {
                        const lastMessage = conversation.messages[conversation.messages.length - 1];
                        const memberEmail = conversation.members.find(email => email !== sessionStorage.getItem('currentUserEmail'));
                        if (!memberEmail) {
                            console.error('Member email not found for conversation:', conversation);
                            return;
                        }
                        const listItem = document.createElement('a');
                        listItem.href = './chat-personal.html';
                        listItem.className = 'list-group-item list-group-item-action border-bottom-0 d-flex align-items-center gap-3 px-3 rounded-2';
                        listItem.innerHTML = `
                            <div class="d-flex align-items-center gap-3">
                                <div class="avatar avatar-lg flex-shrink-0">
                                    <img src="./../assets/images/avatar/1.png" class="img-fluid" alt="image">
                                    <span class="avatar-indicator active"></span>
                                </div>
                                <div class="flex-grow-1">
                                    <h6 class="fw-bold mb-1">${memberEmail}</h6>
                                    <span class="fw-normal text-muted text-truncate-1">${lastMessage ? lastMessage.text : 'No messages yet'}</span>
                                </div>
                            </div>
                            <div class="fs-12 fw-normal text-nowrap text-muted ms-auto">${lastMessage ? new Date(lastMessage.timestamp).toLocaleTimeString() : ''}</div>
                        `;
                        personalChatTabPane.appendChild(listItem);
                    } else {
                        console.error('Invalid conversation data:', conversation);
                    }
                });
            } else {
                console.error('personalTab element not found.');
            }
        } else {
            console.error('Invalid response format for conversations.');
        }
    })
    .catch(error => {
        console.error('Error fetching conversations:', error);
    });
});
