//reducers imported here from other reducer.js files to combine
import isSelectedReducer from './isSelected';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  // whatever name: <Actual reducer>
  isSelectedReducer: isSelectedReducer
});

export default allReducers;
