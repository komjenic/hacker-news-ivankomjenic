import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyles from './styles/globals';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import * as serviceWorker from './serviceWorker';

const renderApp = () => {
    const initialState = {};
    const store = configureStore(initialState);

    store.dispatch({ type: '@hnIvan/@@INIT' });

    ReactDOM.render(
        <Provider store={store}>
            <GlobalStyles />
            <App />
        </Provider>,
        document.getElementById('root')
    );
};
renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
