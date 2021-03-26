import React, { useEffect } from 'react';
import Header from './components/Header'
import Query from './components/Query'
import BaseGrid from './components/Basegrid'
import {useDispatch} from 'react-redux';
//useSelector,
import {selected, unselected} from './components/actions';
import {campuses, campus} from './Campuses'
import { Button } from '@material-ui/core';
import NavTabs from './components/Tabs'


function App() {
  var i = 1;
  const dispatch = useDispatch();
  //const action = useSelector(state => state.action);
  //<h3>Action {action}</h3>
  //{isSelected ? <h3>state information from selected stop</h3> : '' }
  return (
      <div className="App">
        <NavTabs/>
        {/* <Header color='#183693' title={campuses[0].name} /> */}
        <Query/>
        <button onClick = { () =>
          dispatch(selected(campuses))}> testbtn</button>
        <button onClick = { () =>
          dispatch(unselected(campuses))}>testbtn2</button>´
          </div>
  );
        }


export default App;
