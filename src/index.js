import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import App from './components/app';
import {fetchMemes} from './actions';
import thunk from 'redux-thunk';
import './styles/index.css';

const store = createStore(rootReducer,applyMiddleware(thunk));
store.subscribe(()=> console.log('store', store.getState()));
store.dispatch(fetchMemes());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
)
