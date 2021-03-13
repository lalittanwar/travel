import * as api from '../api';
import { CREATE_USER,GET_USER,REMOVE_USER } from '../constants/actionTypes';

export const createUser = ( user ) => async ( dispatch ) => {
    try {
        await api.createUser( user );
        dispatch( { 'type': CREATE_USER,'payload': user } );
    } catch ( error ) {
        console.log( error.message );
    }
}

export const getUser = ( user ) => async ( dispatch ) => {
    try {
        await api.getUser( user );
        dispatch( { 'type': GET_USER,'payload': user } );
    } catch ( error ) {
        console.log( error.message );
    }
}

export const removeUser = () => async ( dispatch ) => {
    dispatch( { 'type': REMOVE_USER,'payload': [] } );
}



