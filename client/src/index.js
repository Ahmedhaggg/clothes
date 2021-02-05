import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import App from './app'
import reducer from './reducers/index'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))
window.store = store
// createStoreWithMiddleware(reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()
// )
ReactDOM.render( 
        <Provider store={store}>
            <App />
        </Provider>
    , document.querySelector('#root') )

