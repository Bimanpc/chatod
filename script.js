document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('sendButton');
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');

    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            const chatMessage = document.createElement('div');
            chatMessage.textContent = message;
            chatMessages.appendChild(chatMessage);
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendButton.click();
        }
    });
});
