import { createStore, compose, combineReducers } from 'redux';
import siteDrawer from './siteDrawer';
import modal from './modal';

const rootReducer = combineReducers({
	modal,
	siteDrawer,
});

let composeEnhancers = compose;
let store;

/* eslint-disable no-underscore-dangle */
if (process.env.NODE_ENV !== 'production') {
	composeEnhancers =
		typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
			: compose;
}

export default (initialState = {}) => {
	if (!store) {
		store = createStore(rootReducer, initialState, composeEnhancers());
	}

	return store;
};
