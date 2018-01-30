class ChatMessage {
  constructor(message) {
    this.username = message.username;
    this.timestamp = message.timestamp;
    this.message = message.message;
  }

  render(parentElement) {
    const container = document.createElement('div');
    const timestamp = document.createElement('span');
    const username = document.createElement('span');
    const message = document.createElement('span');

    container.classList.add('message');
    timestamp.classList.add('timestamp');
    username.classList.add('username');

    timestamp.textContent = this.timestamp;
    username.textContent = this.username;
    message.textContent = this.message;

    container.appendChild(timestamp);
    container.appendChild(username);
    container.appendChild(message);

    parentElement.appendChild(container);
  }
}
