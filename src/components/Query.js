import React, { useState, useEffect } from 'react';

import BaseGrid from './Basegrid'

const Query = () => {
  const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
  const [data, setData] = useState([null]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const query = { "query": `{
      stop(id: \"HSL:1040129\") {
        name
        lat
        lon
      }
    }` }

    const query2 = { "query": `{
        stop(id: \"HSL:1173434\") {
          name
          lat
          lon
          routes {
            shortName
            longName
          }
        }
        route(id: \"HSL:1009\") {
          shortName
          longName
        }
      }` }

      const query3 = { "query": `{
        stopsByRadius(lat: 60.221434757806406, lon: 24.757031816028093, radius: 500, first: 4) {
          edges {
            node {
              stop {
                name
                lat
                lon
              }
              distance
            }
          }
        }
      }` }

      const query4 = {"query": `  {
        stopsByRadius(lat:60.221434757806406,lon:24.757031816028093,radius:500) {
          edges {
            node {
              stop { 
                gtfsId 
                name
                stoptimesWithoutPatterns {
                  scheduledArrival
                  realtimeArrival
                  arrivalDelay
                  scheduledDeparture
                  realtimeDeparture
                  departureDelay
                  realtime
                  realtimeState
                  serviceDay
                  headsign
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
      body: JSON.stringify(query4),
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