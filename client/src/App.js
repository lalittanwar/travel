import React from 'react';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import './index.css';
import { AppBar,Button,Typography,Toolbar } from '@material-ui/core';

const App = () => {
    return (
        <React.Fragment >
            <Router>
                <AppBar className="app-bar">
                    <Toolbar>
                        <Typography variant="h6" style={ { flexGrow: 1 } }>Gayatri Graphics</Typography>
                        <Link to='/login' style={ { textDecoration: 'none',color: 'white' } }>
                            <Button color="inherit">Login</Button>
                        </Link>
                        <Link to='/signUp' style={ { textDecoration: 'none',color: 'white' } }>
                            <Button color="inherit">SignUp</Button>
                        </Link>
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
