import React, { useState, useEffect } from 'react';
import campuses from '../Campuses';

import BaseGrid from './Basegrid'

const Query = () => {
  const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
  const [data, setData] = useState([null]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

      const query = {"query": `{
        stopsByRadius(lat:${campuses[0].lat},lon:${campuses[0].long},radius:500,first:4) {
          edges {
            node {
              stop { 
                gtfsId 
                name
                stoptimesWithoutPatterns {
                  realtimeArrival
                  serviceDay
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

    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setData(data.data)
      setLoading(false)
    })
    .catch(err => {
      console.error("Error fetching data:", err)

    })
  },[url])

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