import axios from 'axios';

const url = "http://localhost:5000/posts";
const urlGetUser = "http://localhost:5000/users/getUsers";
const urlPostUser = "http://localhost:5000/users/PostUsers";

export const fetchPosts = () => axios.get( url );

export const createPost = ( newPost ) => axios.post( url,newPost );

export const updatePost = ( id,updatedPost ) => axios.patch( `${ url }/${ id }`,updatedPost );

export const likePost = ( id,updatedPost ) => axios.patch( `${ url }/${ id }/likePost`,updatedPost );

export const deletePost = ( id ) => axios.delete( `${ url }/${ id }` );


export const getUser = ( user ) => axios.post( urlGetUser,user );

export const createUser = ( newUser ) => axios.post( urlPostUser,newUser );