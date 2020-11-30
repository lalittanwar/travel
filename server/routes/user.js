const express = require( 'express' );
const { getUser,createUser } = require( '../controller/users.js' );

router = express.Router();

router.get( '/',getUser );
router.post( '/',createUser );
// router.patch( '/:id',updatePost );
// router.patch( '/:id/likePost',likePost );
// router.delete( '/:id',deletePost );

module.exports = router;