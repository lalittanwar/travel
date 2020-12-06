import * as api from '../api';
import { FETCH_ALL,CREATE,LIKE,UPDATE,DELETE,CREATE_USER } from '../constants/actionTypes';

export const getPosts = () => async ( dispatch ) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch( { 'type': FETCH_ALL,'payload': data } );
    } catch ( error ) {
        console.log( error.message );
    }
}

export const createPost = ( postData ) => async ( dispatch ) => {
    try {
        const { data } = await api.createPost( postData );
        dispatch( { 'type': CREATE,'payload': data } );
    } catch ( error ) {
        console.log( error.message );
    }
}

export const updatePost = ( id,post ) => async ( dispatch ) => {
    try {
        const { data } = await api.updatePost( id,post );
        dispatch( { 'type': UPDATE,'payload': data } );
    } catch ( error ) {
        console.log( error.message );
    }
}

export const likePost = ( id,post ) => async ( dispatch ) => {
    try {
        const { data } = await api.likePost( id,post );
        dispatch( { 'type': LIKE,'payload': data } );
    } catch ( error ) {
        console.log( error.message );
    }
}


export const deletePost = ( id ) => async ( dispatch ) => {
    try {
        await api.deletePost( id );
        dispatch( { 'type': DELETE,'payload': id } );
    } catch ( error ) {
        console.log( error.message );
    }
}


export const createUser = ( user ) => async ( dispatch ) => {
    try {
        await api.createUser( user );
        dispatch( { 'type': CREATE_USER,'payload': user } );
    } catch ( error ) {
        console.log( error.message );
    }
}


