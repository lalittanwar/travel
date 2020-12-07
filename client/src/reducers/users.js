import { CREATE_USER,GET_USER } from '../constants/actionTypes'

const reducer = ( users = [],action ) => {
    switch ( action.type ) {
        case GET_USER:
            return action.payload;
        case CREATE_USER:
            return [ ...users,action.payload ];
        default:
            return users;
    }
}

export default reducer;