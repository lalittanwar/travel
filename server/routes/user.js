const express = require( 'express' );
const { getUser,createUser } = require( '../controller/users.js' );

router = express.Router();

router.post( '/',getUser );
router.post( '/',createUser );

module.exports = router;