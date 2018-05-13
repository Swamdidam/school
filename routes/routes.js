'use strict';

/**
 * Dependencies
*/

const
    express = require('express'),
    log = require('../utils/logger').getLogger('routes'),
    _ = require('lodash'),
    bcrypt = require('bcryptjs'),
    crypto = require('crypto'),
    mongoose = require('mongoose'),
    request = require('request'),
    createUser    = require('../models/createUser')
   


/**
 * Router instance
*/

const router = express.Router();


// GET /error-codes/:id

//============================================================================================
// User signup, login, find ...
//============================================================================================

/*
    to create a new user pass ---- {email, password}
*/






router.post("/CreateUser", function (req, res) {

// Function for generating random numbers
//=====================================================


    function randomElement (array) {
        return array[Math.floor(Math.random() * array.length)];
                }
                
                var characters = '1234567890'.split(''),
                    result = '';
                for (var i = 0; i < 11; i++) {
                    result += randomElement(characters);
                }
    
                var mat = result;
                console.log(mat)
//========================================================================
    var form = {
        StateOfOrigin:req.body.StateOfOrigin,
        LGA:req.body.LGA,
        MAT:mat
    }

    // createUser.findOne({mat}, (err, user)=>{
        // if(user){
        //     console.log('user exist')
        //     return res.status(200).json({status:400, message:"User with this email already exist"})
        // }
        // else if(err){
        //     console.log('error')
        //     return res.status(500).json({message:"error"})

        // }
        // else{
            return createUser.create(form)
                .then(doc=>{
                               
                    return res.status(200).json({message: "User created",doc:doc});
                })
                .catch(err=>{
                    return res.status(500).json({message: "Could not create user", err: err});
                })

        // }

    // })
  
});

//=============================================================================================
// User login router
//=============================================================================================

// router.post('/loginUser',(req, res)=>{
    
//     if (req.body.email && req.body.password) {

//         User.authenticate(req.body.email, req.body.password, function (err, user) {
//             if (err) {
//                 res.json({status: 500, message: "An error occured", err: err});
//             }
//             else if(!user){
//                 res.json({status:400, message:"The Account does not exist"})
//             }
//             else{
//                 res.json({status:200, message:"Welcome back to home page"})
//             }
//         })
        
//     }
//     else{
//         return res.status(400).json({info:"Both email and password are required"})
//     }


// })

//=============================================================================================
//Updamatg an exismatg user
//=============================================================================================

router.put('/updateUser', (req, res) => {
   return createUser.update({"email":req.body.email}, 
            {$set:req.body})
        .then(doc => {
            log.info("Successfully updated user's details")
            return res.status(200).json(doc)
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({ message: "error" });

        })
})


//=============================================================================================
// Search all registered users
//=============================================================================================

router.get("/viewAllUsers", function (req, res) {
    return createUser.find({})
    .then(doc=>{
        return res.status(200).json({message: "User created",doc:doc});
      })
      .catch(err=>{
        return res.status(400).json({message: "Cannot display list", err: err});
      })
      
  });



//=============================================================================
/**
* Module export
*/
//=============================================================================
module.exports = router;


