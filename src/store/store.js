import {compose, createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
import { persistStore , persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';

import thunk from 'redux-thunk';
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

const persistorStoreObj = {
   key: 'root',
   storage,
   whitelist:['cart']
}

const persistedReducer = persistReducer(persistorStoreObj, rootReducer)

const middleWares= [process.env.NODE_ENV !== 'production' && loggerMiddleware ,thunk].filter(Boolean)

const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composeEnhancers)

export const persistor = persistStore(store)