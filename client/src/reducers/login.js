import { LOG_IN,LOG_OUT } from '../constants/actionTypes'

const reducer = ( isLogIn = false,action ) => {
    switch ( action.type ) {
        case LOG_IN:
            return true;
        case LOG_OUT:
            return false;
        default:
            return isLogIn;
    }
}

export default reducer;