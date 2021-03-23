import React from 'react';
import Header from './components/Header'
import Query from './components/Query'
import BaseGrid from './components/Basegrid'

//this is redux comment

function App() {
  return (
      <div className="App">
        <Header color='#183693' title='Public Transport' />
        <Query/>
      </div>
  );
}

export default App;
