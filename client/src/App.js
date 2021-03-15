import React,{ useEffect,useState } from 'react';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import './index.css';
import './App.css';
import { AppBar,Button,Typography,Toolbar } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { logout,login } from './actions/login';
import { removeUser } from './actions/users';

const App = () => {

    const user = useSelector( state => state.users );
    const [ profile,setProfile ] = useState( JSON.parse( localStorage.getItem( 'profile' ) ) );
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( logout() );
        dispatch( removeUser() );
        setProfile( '' );
    }

    useEffect( () => {
        setProfile( JSON.parse( localStorage.getItem( 'profile' ) ) );
    },[ user ] )

    return (
        <React.Fragment >
            <Router>
                <AppBar className="app-bar">
                    <Toolbar>
                        <Link to='/' > <Typography variant="h6" style={ { flexGrow: 1 } } >Gayatri Graphics</Typography></Link>
                        { profile?.result?.userName ?
                            ( <div className="signup-div" >{ profile?.result?.userName }
                                <Button onClick={ onLogout } color="inherit">LogOut</Button>
                            </div> ) :
                            ( <div className="signup-div" > <Link to='/login' >
                                <Button color="inherit">Login</Button>
                            </Link>
                                <Link to='/signup' >
                                    <Button color="inherit">SignUp</Button>
                                </Link></div> ) }
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/login" exact component={ ( props ) => <Auth { ...props } isSignUp={ false } /> } />
                    <Route path="/signup" exact component={ ( props ) => <Auth { ...props } isSignUp={ true } /> } />
                </Switch>
            </Router>
        </React.Fragment >
    )
}

export default App;
