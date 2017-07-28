import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga'
import studentsSaga from '../sagas'

export default function configureStore(initialState) {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()   
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  // then run the saga
  sagaMiddleware.run(studentsSaga)
  return store;
}