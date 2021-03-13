import React from 'react';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import './index.css';
import { AppBar,Button,Typography,Toolbar } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from './actions/login';
import { removeUser } from './actions/users';


const App = () => {

    const isLogin = useSelector( state => state.isLogin );
    const user = useSelector( state => state.users );
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( logout() );
        dispatch( removeUser() );
    }

    return (
        <React.Fragment >
            <Router>
                <AppBar className="app-bar">
                    <Toolbar>
                        <Typography variant="h6" style={ { flexGrow: 1 } }>Gayatri Graphics</Typography>
                        { isLogin ?
                            ( <div>{ user.userName }
                                <Button onClick={ onLogout } color="inherit">LogOut</Button>
                            </div> ) :
                            ( <div> <Link to='/login' style={ { textDecoration: 'none',color: 'white' } }>
                                <Button color="inherit">Login</Button>
                            </Link>
                                <Link to='/signUp' style={ { textDecoration: 'none',color: 'white' } }>
                                    <Button color="inherit">SignUp</Button>
                                </Link></div> ) }
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/signup" exact component={ Signup } />
                    <Route path="/login" exact component={ Login } />
                </Switch>
            </Router>
        </React.Fragment >
    )
}

export default App;
