import React, { useState, useEffect } from 'react';
import campuses from '../Campuses';

import BaseGrid from './Basegrid'

const Query = () => {
  const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
  const [data, setData] = useState([null]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {

    const fetchData = () => {
      fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query),
      })
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

    setInterval(() => {
      fetchData()
   }, 1000 * 60)
  }, [])

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