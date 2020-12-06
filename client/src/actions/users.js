import * as api from '../api';
import { CREATE_USER } from '../constants/actionTypes';

export const createUser = ( user ) => async ( dispatch ) => {
    try {
        await api.createUser( user );
        dispatch( { 'type': CREATE_USER,'payload': user } );
    } catch ( error ) {
        console.log( error.message );
    }
}


