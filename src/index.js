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
import { ChangeHistorySharp } from '@material-ui/icons';


//------------------Redux info------------------
// Redux is a global state management tool able to access the state via
// Redux's Store component. Actions are dispatched from events, carrying
// information about the purpose of the action and possible payload. Redux allReducers
// handle the action types and return new state with desired Changes.
// App component needs to be wrapped with provider that has store


const middleware = [thunk];
//enable devtools for chrome
const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

//store creation for redux
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
