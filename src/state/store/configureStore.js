import LS from '../middlewares/localStorageMid';
import {applyMiddleware, createStore} from "redux";
import allReducers from '../reducers';

const configureStore = (preloadedState) => {
    const middlewares = [LS];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    return createStore(allReducers, preloadedState, middlewareEnhancer);
};

export default configureStore;
