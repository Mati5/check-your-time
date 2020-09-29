import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { saveState, loadState } from '../localStorage/localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState(store.getState());
});

export default store; 