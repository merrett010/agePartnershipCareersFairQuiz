var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var fs = require('fs');
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/react-jsx/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../build/src/index.js'));
});

app.get('/logo-img/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/./logo-inverted.png'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
      console.log('user disconnected');
  });
  socket.on('formComplete', (details) => {
      var jsondetails = JSON.stringify(details);
      fs.appendFile("donotdelete.json", jsondetails + "\n", function(err) {
          if(err) {
              return console.log(err);
          }
          console.log("The file was saved!");
      });
  })
});



http.listen(3000, () => {
  console.log('listening on *:3000');
})