import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,compose,applyMiddleware } from 'redux';
import App from './App';
import thunk from 'redux-thunk';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducer,composeEnhancers( applyMiddleware( thunk ) ) );
// const store = createStore( reducer,compose( ) );

ReactDom.render(
    <Provider store={ store } >
        <App />
    </Provider>
    ,document.getElementById( 'root' ) );