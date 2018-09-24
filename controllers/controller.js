const Users = require('../models/model');

exports.findAll = (req, res) => {
    Users.find()
    .then(users => {
        if (users.length > 0) {
            res.status(200).send(users);    
        } else { res.status(400) }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    });
};

exports.getUserData =  (req, res) => {
    Users.findById(req.params.UserId, (err, users) => {
            if (err) throw err;
            res.send(users);
    });
};

exports.postUserData =  (req, res) => {
    let users = new Users({
        UserId: req.body.UserId,
        username: req.body.username       
    }); 
    users.save((err) => {
        if (err) throw err;
        res.send('User Created');
    });
};


exports.putUserData =  (req, res) => {
    Users.findByIdAndUpdate(req.params.UserId, { $set: req.body },(err, users) =>{
        if (err) throw err; 
        res.send('User Updated');
    });
};


exports.deleteUserData =  (req, res) => {
    Users.findByIdAndDelete(req.params.UserId, (err, users) =>{
        if (err) throw err;
        res.send('User Deleted');
    });
};

