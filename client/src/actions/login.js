import { LOG_OUT,LOG_IN } from '../constants/actionTypes';

export const login = () => async ( dispatch ) => {
    try {
        dispatch( { 'type': LOG_IN,'payload': true } );
    } catch ( error ) {
        console.log( error.message );
    }
}

export const logout = () => async ( dispatch ) => {
    try {
        dispatch( { 'type': LOG_OUT,'payload': false } );
    } catch ( error ) {
        console.log( error.message );
    }
}



