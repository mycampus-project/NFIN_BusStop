import React from 'react';
import Header from './components/Header'
import Query from './components/Query'
import BaseGrid from './components/Basegrid'

function App() {
  return (
      <div className="App">
        <Header color='blue' title='Public Transport' />
        <Query></Query>
        <BaseGrid></BaseGrid>
      </div>
  );
}

export default App;
