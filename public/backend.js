var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
// var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/react-jsx/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../build/src/index.js'));
});

app.get('/logo-img/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/./logo-inverted.png'));
});


http.listen(3000, () => {
  console.log('listening on *:3000');
})