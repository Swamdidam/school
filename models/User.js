
var mongoose = require("mongoose");
bcrypt = require('bcryptjs');


// MONGOOSE MODEL CONFIGURATION
const UserSchema = new mongoose.Schema({

    
    email: {
        type: String,
        required: [true, 'Please enter a valid email address'],
        unique: "({VALUE}) already exists",
    },
    password: {
        type: String,
        required: [true, 'Please add a password 6 digit minimum'],
        minlength:6
    },
 

});
}
module.exports = mongoose.model('User', UserSchema);


