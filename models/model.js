const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Users = new Schema({
    UserId: {type: Number },
    username: {type: String, required: true}
});

// Export the model
module.exports = mongoose.model('UserData', Users);