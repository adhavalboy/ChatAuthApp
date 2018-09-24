const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');

const router = express.Router();
//const UserData = require('./routers/router');
const Server = require('./server');
const app = express();

let dev_db_url = 'mongodb://Anuj:test123@ds119072.mlab.com:19072/chatjs';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB Connection Error'));

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
require('./routers/router')(app);
app.use('/UserData', UserData);

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

let port = 3000;
app.listen(port, () => {
    console.log('server running: '+ port);
});

module.exports = router; 