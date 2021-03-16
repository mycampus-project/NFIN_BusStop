import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import { graphql } from 'graphql';

function App() {

  useEffect(() => {
    const url = "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql";
    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',  {
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
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    /*
    const data = response.json();
    console.log(data)*/
  })

  return (
      <div className="App">
        <Header color='blue' title='Public Transport' />
      </div>
  );
}


export default App;
