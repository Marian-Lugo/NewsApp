import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import newsReducer from './reducers/newsReducer';

const rootReducer = combineReducers({
  news: newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
