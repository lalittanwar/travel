const mongoose = require( 'mongoose' );

const postSchema = mongoose.Schema( {
    creator: String,
    title: String,
    message: String,
    tags: [ String ],
    selectedFile: String,
    likeCount: {
        default: 0,
        type: Number
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
} )
const PostMessage = mongoose.model( 'PostMessage',postSchema );

module.exports = PostMessage; 