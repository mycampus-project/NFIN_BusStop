import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux';
import allReducers from './components/reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducers); //reducers here

store.subscribe(() => console.log(store.getState));
//when an action is dispatched, reducer takes a look at what was dispatched, specificly the type, and returns a state
//store.dispatch(action());


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
