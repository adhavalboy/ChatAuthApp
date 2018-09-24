const Users = require('../models/model');

exports.findAll = (req, res) => {
    Users.find()
    .then(users => {
        if (users.length > 0) {
            res.status(200).send(users);    
        } else { res.status(400) }
    }).catch(err => {
        res.status(500).send('Error');
    });
};

exports.getUserData =  (req, res) => {
    Users.findById(req.params.UserID, (err, users) => {
            if (err) throw err;
            res.send(users);
    });
};

exports.postUserData =  (req, res) => {
    console.log("Test 1");
    let users = new Users({
        UserID: req.body.UserID,
        username: req.body.username,
        message: req.body.message   
    }); 
    console.log("Test 2");
    users.save((err) => {
        if (err) throw err;
        res.send('User Created');
    });
    console.log("Test 3");
};


exports.putUserData =  (req, res) => {
    Users.findByIdAndUpdate(req.params.UserID, { $set: req.body },(err, users) =>{
        if (err) throw err; 
        res.send('User Updated');
    });
};


exports.deleteUserData =  (req, res) => {
    Users.findByIdAndDelete(req.params.UserID, (err, users) =>{
        if (err) throw err;
        res.send('User Deleted');
    });
};

