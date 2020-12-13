import { combineReducers } from 'redux';
import posts from './posts';
import users from './users';
import isLogin from './login';

export default combineReducers( { posts,users,isLogin } )