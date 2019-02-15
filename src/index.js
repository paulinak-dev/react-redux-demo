import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';

import './index.css';

import App from './containers/App';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)