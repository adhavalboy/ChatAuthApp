var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var moment = require('moment');
var bodyParser = require ('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
const controller = require('./controllers/controller')

users = [];
connections = [];
messages = [];

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/chatappAnuj',{ useNewUrlParser: true } , function (err) {
  if (err) throw err;
  console.log('Successfully connected to database');
});
//var Message = mongoose.model('Message',{id: Number, name : String, message : String, type: Text });


server.listen(process.env.PORT || 8888);
server.listen(1337, function(){
    console.info('Server listening on port ' + this.address().port);
});

app.use(cors());
app.use(bodyParser.json());
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/users',function(req,res){
   // var users1 = JSON.stringify.parse(users); 
    res.send(users);
});

app.get('/messages',function(req,res){
    res.send(message);
});

//Connection with socket
io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Connected: %s sockets Connected', connections.length);

//Disconnection with socket
    socket.on('disconnnection', function(socket){
        //if(!socket.username) return;
        users.splice(users.indexOf(socket.users), 1);
        updateUsernames();
        connections.splice(connections.indexOf(socket),1);
        //console.log('Disconnected: %s sockets Connected', connections.length);
    });

    //Send Message 
    socket.on('send message', function(data){
        io.sockets.emit('new message', {msg: data, user: socket.username,time: moment().format('lll')});
        console.log({msg: data, user: socket.username});
        const objTosave = {
            message: data,
            username: socket.username,
            UserID: 123
        }
        controller.addMessageToDb(objTosave)
            .then((createdMessage) => {
                console.log('Data created')
            })
            .catch((err) => {
                console.log('err');
            })
        // res.sendStatus(200);
    });

    //New Users
    socket.on('new user', function(message, callback){
         callback(true);
         socket.username = message;
         users.push(socket.username);
         updateUsernames();
         //console.log('Joined: '+users);
         //console.log('Disconnected: '+users.splice(socket));
    });
    function updateUsernames(){
        io.sockets.emit('get users', users);
    }
  
    console.log('Login Time: ',moment().format('lll'));
    //console.log((users));
});
