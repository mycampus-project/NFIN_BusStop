import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Query from './components/Query'
import { graphql } from 'graphql';

function App() {
  return (
      <div className="App">
        <Header color='blue' title='Public Transport' />
        <Query></Query>
      </div>
  );
}


export default App;
