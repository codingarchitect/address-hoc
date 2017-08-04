import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './app/reducer'; 

import App from './app/App.jsx';
  
// ========================================================
// Store Setup
// ========================================================
const initialState = window.__INITIAL_STATE__;
// ======================================================
// Middleware Configuration
// ======================================================
const middleware = [thunk];

// ======================================================
// Store Enhancers
// ======================================================
const enhancers = [];

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  const composeWithDevToolsExtension =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line no-underscore-dangle
  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension;
  }
}

const store = createStore(
  appReducer,    
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers,
  ),
);

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');
let render = () =>
  ReactDOM.render(
    (<Provider store={store}>
      <App />
    </Provider>),
    MOUNT_NODE);

// ========================================================
// Go!
// ========================================================
render();