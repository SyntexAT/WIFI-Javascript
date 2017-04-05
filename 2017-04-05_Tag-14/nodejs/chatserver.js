var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen( 5555, function(){ console.log('WIFI Secret Chat on 5555'); } );
var io = socket(server);

app.use(express.static('public'));
app.get('/', function(req,res){
  res.sendFile(__dirname+'/d14-chat.html');
})

io.on('connection', function( socket ){
  console.log('Neuer Benutzer verbunden');

  socket.on('disconnect', function(){
    console.log('Benutzer hat die Verbindung getrennt');
  });

  socket.on('shout', function( data ){
    io.emit('newmessage', data);
  });



});
