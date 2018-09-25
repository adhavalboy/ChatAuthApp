const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Users = new Schema({
    UserID: {type: Number },
    username: {type: String, required: true},
    message : {type: String}
});

// Export the model
module.exports = mongoose.model('UserData', Users);