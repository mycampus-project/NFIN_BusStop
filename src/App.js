import React from 'react';
import NavTabs from './components/Tabs';
import StopMap from './components/Map';
import {useDispatch} from 'react-redux';
//useSelector,
import {selected, unselected} from './components/actions';
import {campuses, campus} from './Campuses'

// const Checker = () => {
//   useEffect(() => {
//   console.log(campuses);
//   });
// };

function App() {
  var i = 1;
  const dispatch = useDispatch();
  //const action = useSelector(state => state.action);
  //<h3>Action {action}</h3>
  //{isSelected ? <h3>state information from selected stop</h3> : '' }
  return (
      <div className="App">
        <NavTabs/>
        <StopMap/>
      </div>
        {/* <Header color='#183693' title={campuses[0].name} /> */}
        <button onClick = { () =>
          dispatch(selected(campuses))}> testbtn</button>
        <button onClick = { () =>
          dispatch(unselected(campuses))}>testbtn2</button>´
          </div>
  );
}


export default App;
