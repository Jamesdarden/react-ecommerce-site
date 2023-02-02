import {compose, createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';
// curring a function when a function returns another function
const loggerMiddleware = (store) => (next) => (action) => {
 if(!action.type) {
    return next(action);
 }
    console.log('type: ', action.type)
    console.log('payload: ', action.payload)
    console.log('currentState: ', store.getState());

    next(action); //only after subsequent actions happen like reducers get called ect does the code after next gets called

    console.log('updated state :', store.getState());
}
const middleWares= [loggerMiddleware]

const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composeEnhancers)