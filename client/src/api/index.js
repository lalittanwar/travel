import axios from 'axios';

const url = "http://localhost:5000/posts";
const urlUser = "http://localhost:5000/users";

export const fetchPosts = () => axios.get( url );

export const createPost = ( newPost ) => axios.post( url,newPost );

export const updatePost = ( id,updatedPost ) => axios.patch( `${ url }/${ id }`,updatedPost );

export const likePost = ( id,updatedPost ) => axios.patch( `${ url }/${ id }/likePost`,updatedPost );

export const deletePost = ( id ) => axios.delete( `${ url }/${ id }` );


export const fetchUser = () => axios.get( url );

export const createUser = ( newUser ) => axios.post( urlUser,newUser );