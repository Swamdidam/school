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



//createUserSchema.pre('save', function(next){
//    var self = this;
//      createUser.find(self.user, function(err,user){
//          if(err){
//    console.log(err)
//  }else if(user.LGA=="JN"){
//        user.MAT == "JN"+MAT
//      }else next()
//    })
//        
//    })



//=============================================================================
/**
 * Export RolesUsersModel
 */
//=============================================================================
module.exports = mongoose.model('createUser', createUserSchema);
//=============================================================================
