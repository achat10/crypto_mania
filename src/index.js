import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Store from './app/store'

import App from './App';
import 'antd/dist/antd.css';

ReactDOM.render(
    <Router>
        <Provider store={Store}>
            <App/>
        </Provider>
    </Router>,document.getElementById('root'));
    