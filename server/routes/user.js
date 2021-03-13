const express = require( 'express' );
const { getUser,createUser } = require( '../controller/users.js' );

router = express.Router();

router.post( '/getUsers',getUser );
router.post( '/PostUsers',createUser );

module.exports = router;