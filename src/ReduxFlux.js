/*
 * License information at https://github.com/Caltech-IPAC/firefly/blob/master/License.txt
 */


import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

const redux = createRedux();

const reducers = {
    ui: uiReducer
}

export function dispatch(rawAction) {
    redux.dispatch(actionHandler(rawAction));
}


function createRedux() {
    // create a rootReducer from all of the registered reducers
    const rootReducer = combineReducers(reducers);
    const sagaMiddleware = createSagaMiddleware();
    const middleWare=  applyMiddleware(thunkMiddleware, sagaMiddleware);
    const store = createStore(rootReducer, middleWare);
    sagaMiddleware.run(masterSaga);
    return store;
}


function actionHandler(rawAction) {

    if (!action.type) return rawAction;
    switch (action.type) {
        default:
            return rawAction;
    }

    return rawAction;
}


function uiReducer(state={}, action={}) {
    if (!action.payload || !action.type) return state;
    switch (action.type) {
        default:
            return state;
    }

}