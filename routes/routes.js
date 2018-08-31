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
    var form = {
        StateOfOrigin:req.body.StateOfOrigin,
        LGA:req.body.LGA,
        MAT:mat
    }

     return createUser.create(form)
                .then(doc=>{
                               
                    return res.status(200).json({message: "User created",doc:doc});
                })
                .catch(err=>{
                    return res.status(500).json({message: "Could not create user", err: err});
                })

});

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


