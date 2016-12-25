var express = require('express');
var http = require('http')
var socketio = require('socket.io');
var mongojs = require('mongojs');
var ObjectID = mongojs.ObjectID;

var db = mongojs(process.env.MONGO_URL || 'mongodb://localhost:27017/local');
var app = express();
var server = http.Server(app);
var websocket = socketio(server);
var clients = {};

websocket.on('connection', function(socket){
  clients[socket.id] = socket;
  var userId = new ObjectID();
  socket.emit('userId', userId);
  socket.on('message', function(message) {
    saveAndSendMessage(message, userId);
  });
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});

function saveAndSendMessage(message, senderId) {
  console.log(message);
}
