import { createStore } from 'redux';
import reducer from './reducer';
import middleware from './middleware';

const store = createStore(reducer, middleware);
store.dispatch({ type: '@hnIvan/@@INIT' });

export default store;
