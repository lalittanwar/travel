const mongoose = require( 'mongoose' );
const User = require( '../models/user' );

const getUser = async ( req,res ) => {
    const userData = req.body;
    try {
        User.findOne( { userName: userData.userName },( error,user ) => {
            if ( error ) {
                console.log( error );
            } else {
                if ( !user ) {
                    res.status( 401 ).send( 'Invalid user' );
                } else if ( user.password !== userData.password ) {
                    res.status( 401 ).send( 'Incorrect Password' );
                } else {
                    res.status( 200 ).json( user );
                }
            }
        } )
    } catch ( error ) {
        res.status( 404 ).json( { message: error.message } );
    }
}

const createUser = async ( req,res ) => {
    const user = req.body;
    const newUser = new User( user );
    try {
        await newUser.save();
        res.status( 201 ).json( newUser );
    } catch ( error ) {
        res.status( 409 ).json( { message: error.message } );
    }
}

module.exports = { getUser,createUser }
