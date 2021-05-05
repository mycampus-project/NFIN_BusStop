import React from 'react';
import NavTabs from './components/Tabs';
import StopMap from './components/Map';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux'
import {selected, unselected, getcampuses, addcampus} from './components/actions';
import {campuses, campus} from './Campuses'

// const Checker = () => {
//   useEffect(() => {
//   console.log(campuses);
//   });
// };

function App() {
  var i = 1;
  const dispatch = useDispatch();

  const testcampus = [
    {
      id: 4,
      name: 'testi',
      lat: 61.221434757806406,
      long:  23.757031816028093,
      selected: true
    } ]
  //const action = useSelector(state => state.action);
  //<h3>Action {action}</h3>
  //{isSelected ? <h3>state information from selected stop</h3> : '' }
  return (
      <div className="App">
        <NavTabs/>
        {/* <Header color='#183693' title={campuses[0].name} /> */}
        <button onClick = { () =>
          dispatch(selected(campuses))}> testbtn</button>
        <button onClick = { () =>
          dispatch(addcampus(testcampus))}>testbtn2</button>´
          </div>
  );
}


export default App;
