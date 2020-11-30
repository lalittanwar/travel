const express = require( 'express' );
const { getPost,createPost,updatePost,deletePost,likePost } = require( '../controller/posts.js' );

router = express.Router();

router.get( '/',getPost );
router.post( '/',createPost );
router.patch( '/:id',updatePost );
router.patch( '/:id/likePost',likePost );
router.delete( '/:id',deletePost );

module.exports = router;