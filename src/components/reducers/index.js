//reducers imported here from other reducer.js files to combine
import isSelectedReducer from './isSelected';
import {combineReducers} from 'redux';
import campusesReducer from './campusReducers';

//rootReducer to pass to store in index.js
const allReducers = combineReducers({
  // whatever name: <Actual reducer>
  isSelectedReducer: isSelectedReducer,
  campusesReducer: campusesReducer

});

export default allReducers;
