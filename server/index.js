var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);

websocket.on('connection', function(socket){
  console.log('connected');
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});
