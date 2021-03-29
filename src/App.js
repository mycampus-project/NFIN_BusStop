import React from 'react';
import NavTabs from './components/Tabs'
import Header from './components/Header'
import Query from './components/Query'
import campuses from './Campuses';

//this is redux comment

function App() {

  return (
      <div className="App">
        <NavTabs/>
        //<Header color='#183693' title={campuses[0].name} />
        //<Query/>
      </div>
  );
}

export default App;
