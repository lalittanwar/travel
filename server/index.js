/* import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; */

const express = require( 'express' );
const cors = require( 'cors' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const postRoutes = require( './routes/posts' );
const userRoutes = require( './routes/user' );
const dotenv = require( 'dotenv' );

let app = express();

dotenv.config();

app.use( cors() );
app.use( bodyParser.json( { limit: "30mb",extended: true } ) );
app.use( bodyParser.urlencoded( { limit: "30mb",extended: true } ) );

app.use( '/users',userRoutes );
app.use( '/posts',postRoutes );


// const CONNECTION_STRING = "mongodb+srv://lalit111:lalit111@cluster0.s5rgj.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect( process.env.CONNECTION_STRING,{ useNewUrlParser: true,useUnifiedTopology: true } )
    .then( () => app.listen( PORT,() => console.log( `app running on server ${ PORT }` ) ) )
    .catch( error => console.log( error.message ) );

mongoose.set( 'useFindAndModify',false );