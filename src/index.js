import React from 'react';
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import App from './App'
import { rootReducer } from './redux/rootReducer'
import { forbiddenWordsMiddleware } from './redux/middlewaire'
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    forbiddenWordsMiddleware,
    saga
    ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root')
);

