import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyles from './styles/globals';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import * as serviceWorker from './serviceWorker';
// import hackerNewsApi from './services/hackerNewsApi';

const page = async () => {
    // console.log(await hackerNewsApi.getTopStoryIds());
    // const pageIds = hackerNewsApi.getStoriesByPage(topStoryIds, 0);
    // console.log(topStoryIds);
    // console.log(await hackerNewsApi.getStoriesByPage(topStoryIds, 0));
    // console.log(await hackerNewsApi.getStory(8863));
};
page();

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
