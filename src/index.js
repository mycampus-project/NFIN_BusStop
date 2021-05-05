import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import allReducers from './components/reducers';
import { Action } from 'react-redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { selected } from './components/actions';
import {useDispatch} from 'react-redux';
import AllCampuses from './AllCampuses';



const middleware = [thunk];
const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);


const store = createStore(allReducers, enhancers); //reducers here

store.subscribe(() => console.log(store.getState));
//when an action is dispatched, reducer takes a look at what was dispatched, specificly the type, and returns a state
// store.useDispatch(action(selected));


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
