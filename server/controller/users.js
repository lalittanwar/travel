const mongoose = require( 'mongoose' );
const User = require( '../models/user' );
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );

const getUser = async ( req,res ) => {
    console.log( 'get' );
    const { userName,password } = req.body;
    try {
        const existingUser = await User.findOne( { userName } );
        if ( !existingUser ) return res.status( 404 ).json( { message: 'Invalid user' } );
        const isPasswordCorrect = await bcrypt.compare( password,existingUser.password );
        if ( !isPasswordCorrect ) return res.status( 404 ).json( { message: 'Password is incorrect' } );

        const token = jwt.sign(
            { userName: existingUser.userName,id: existingUser._id },
            'test',
            { expiresIn: '1hr' } );

        res.status( 200 ).json( { result: existingUser,token } );
    } catch ( error ) {
        res.status( 404 ).json( { message: error.message } );
    }
}

const createUser = async ( req,res ) => {
    console.log( 'create' );
    const { userName,password } = req.body;
    console.log( userName,password );
    try {
        const existingUser = await User.findOne( { userName: req.body.userName } );
        // console.log( 'e',existingUser.userName )
        if ( existingUser ) return res.status( 404 ).json( { message: 'User already exists.' } );

        const hashedPassword = await bcrypt.hash( password,12 )
        console.log( hashedPassword )
        const result = await User.create( { userName,password: hashedPassword } );

        const token = jwt.sign(
            { userName: result.userName,id: result._id },
            'test',
            { expiresIn: '1hr' } );

        res.status( 200 ).json( { result,token } );
    } catch ( error ) {
        res.status( 404 ).json( { message: error.message } );
    }
}

module.exports = { getUser,createUser }
