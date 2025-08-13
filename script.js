// script.js

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('message-input');
  const chatMessages = document.querySelector('.chat-messages');
  const toggle = document.getElementById('theme-toggle');

  // Send message when "Enter" is pressed
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && input.value.trim() !== '') {
      const message = document.createElement('div');
      message.classList.add('message', 'sent');
      message.textContent = input.value.trim();

      chatMessages.appendChild(message);
      input.value = ''; // Clear input
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });

  // Simulate receiving messages
  function receiveMessage(text) {
    const message = document.createElement('div');
    message.classList.add('message', 'received');
    message.textContent = text;

    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  setTimeout(() => receiveMessage("I'm the Dirty Bubble! Watch out, HAHAHA!"), 2000);
  setTimeout(() => receiveMessage("I'm gonna get you, You Dirty Bubble!"), 4000);
  setTimeout(() => receiveMessage("I'm bubbling over with rage!"), 6000);

  // Theme toggle button
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const icon = toggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
      }
    });
  }
});
