import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import rootRaducer from '../features/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(

    rootRaducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store
