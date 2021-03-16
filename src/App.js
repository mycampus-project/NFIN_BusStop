import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import Header from './components/Header'
import { graphql } from 'graphql';

function App() {

  useEffect(() => {
    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "query": `{
        stop(id: \"HSL:1040129\") {
          name
          lat
          lon
          wheelchairBoarding
        }
      }` }),
    })
    .then(res => {
      if (res.ok) {
        console.log(res.json())
      }
      throw res;
    })
    .catch(err => {
      console.log(err)
    })
  })

  return (
      <div className="App">
        <Header color='blue' title='Public Transport' />
      </div>
  );
}


export default App;
