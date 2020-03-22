import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './assets/css/index.scss'
import App from './components/App';
import { messageReducer } from './components/reducers/message-reducer';


ReactDOM.render(
  <Provider store={createStore(messageReducer)}>
    <App />
  </Provider>,
  document.getElementById('root'));

