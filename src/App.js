import React from 'react';
import NavTabs from './components/Tabs';
import StopMap from './components/Map';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux'
import {selected, unselected, getcampuses, addcampus} from './components/actions';
import {campuses, campus} from './Campuses'
import AllCampuses from "./AllCampuses";

function App() {
  var i = 1;
  const dispatch = useDispatch();

//Commented onClick functions to dispatch actions to store, time was not sufficient
//to fully adapt redux to logic flow of the app
{/* <button onClick = { () =>
          dispatch(selected(campuses))}> testbtn</button>
        <button onClick = { () =>
          dispatch(addcampus(testcampus))}>testbtn2</button>´ */}
  return (
      <div className="App">
        <NavTabs/>
        <AllCampuses/>
          </div>
  );
}


export default App;
