import * as api from '../api';
import { CREATE_USER,GET_USER,REMOVE_USER } from '../constants/actionTypes';

export const createUser = ( user ) => async ( dispatch ) => {
    try {
        const userInfo = await api.createUser( user );
        localStorage.setItem( 'profile',JSON.stringify( userInfo.data ) );
        dispatch( { 'type': CREATE_USER,'payload': user } );
    } catch ( error ) {
        console.log( error.message );
    }
}

export const getUser = ( user ) => async ( dispatch ) => {
    try {
        const userInfo = await api.getUser( user );
        localStorage.setItem( 'profile',JSON.stringify( userInfo.data ) );
        dispatch( { 'type': GET_USER,'payload': user } );
    } catch ( error ) {
        console.log( error.message );
    }
}

export const removeUser = () => async ( dispatch ) => {
    localStorage.removeItem( 'profile' );
    dispatch( { 'type': REMOVE_USER,'payload': [] } );
}



