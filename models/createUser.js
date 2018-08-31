'use strict';
//=============================================================================
/**
* Module dependencies
*/
//=============================================================================
const    mongoose = require('mongoose'),
         uniqueValidator = require('mongoose-beautiful-unique-validation');

//=============================================================================
/**
 * Vehicle Creation model
 */
//=============================================================================
const createUserSchema = mongoose.Schema({
    StateOfOrigin: {
        type: String,
        // required: [true, 'Please enter your state of origin'],
    },
    LGA: {
        type: String,
        // required: [true, 'Please enter your LGA'],      
        
    },
   
    MAT: {
        type: String,
        unique: "({VALUE}) already exists",
        // required: [true, 'Please enter your ODB-II sim number'],
    },
   
       
},{timestamps: true}).plugin(uniqueValidator);



//=============================================================================
module.exports = mongoose.model('createUser', createUserSchema);
//=============================================================================
