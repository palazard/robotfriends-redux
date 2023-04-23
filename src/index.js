import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './containers/App.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

import { Provider } from 'react-redux';
import { searchRobots, requestRobots } from './reducer';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();
const rootReducers = combineReducers({searchRobots, requestRobots});

const store = createStore(rootReducers, applyMiddleware(thunk, logger));

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
        <App/>
    </Provider>
);
// ReactDOM.render(
//     <CardList robots={robots}/>
// , document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
