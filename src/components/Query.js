import React, { useState, useEffect } from 'react';
import campuses from '../Campuses';

import BaseGrid from './Basegrid'

const Query = () => {
  const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
  const [data, setData] = useState([null]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [delay, setDelay] = useState(1000);

  const query = {"query": `{
    stopsByRadius(lat:${campuses[0].lat},lon:${campuses[0].long},radius:500,first:4) {
      edges {
        node {
          stop { 
            gtfsId 
            name
            stoptimesWithoutPatterns {
              realtimeArrival
              headsign
              trip{
                routeShortName
              }
            }
          }
          distance
        }
      }
    }
  }`
  }

  const requestOptions = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  }

  useEffect(() => {
    const fetchData = () => {
      fetch(url, requestOptions)
      .then(res => res.json())
      .then(data => {
        setData(data.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        console.error(error)
      })
    }
    fetchData()
  }, delay )

  return (
    <div>
      {loading || !data ? (
        <h1>Loading ...</h1>
      ) : (
        <div>
          <BaseGrid data={data}/>
        </div>
      )}
    </div>
  )
}

export default Query