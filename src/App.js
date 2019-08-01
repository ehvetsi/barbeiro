import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './services/history';
import './config/ReactotronConfig';
import store from './store';

import GlobalStyle from './styles/global';

import Routes from './routes';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes />
                <GlobalStyle />
            </Router>
        </Provider>
    );
}

export default App;
