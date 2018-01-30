const socket = io();
console.log('id', socket.id);

const sendMessageForm = document.getElementById('send-message-form');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');

sendMessageForm.addEventListener('submit', event => {
  event.preventDefault();
  const message = messageInput.value;
  socket.emit('send-message', { message });
});

socket.on('receive-message', data => {
  console.log('RECEIVED:', data);

  const message = new ChatMessage(data);
  message.render(messagesContainer);
});

const setUsernameForm = document.getElementById('set-username-form');
const usernameInput = document.getElementById('username-input');

setUsernameForm.addEventListener('submit', event => {
  event.preventDefault();
  const username = usernameInput.value;
  socket.emit('set-username', { username });
});
