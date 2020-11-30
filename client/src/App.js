import React from 'react';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import './index.css';


const App = () => {
    return (
        <React.Fragment >
            <Router>
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
