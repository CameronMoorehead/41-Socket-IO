export const socketInit = server => {
  const io = require('socket.io')(server);

  // Localized state to change into DB state
  const USERS = {};

  io.on('connection', socket => {
    USERS[socket.id] = {};
    USERS[socket.id].username = 'anon';

    socket.on('disconnect', () => {
      console.log('LEFT', socket.id);
    });

    socket.on('send-message', data => {
      data.username = USERS[socket.id].username;
      data.timestamp = new Date();

      console.log('Message:', data);
      socket.emit('receive-message', data);
    });

    socket.on('set-username', data => {
      USERS[socket.id].username = data.username;
    });
  });
};
