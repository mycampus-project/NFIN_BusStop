import React, { useState, useEffect } from 'react';
import campuses from '../Campuses';
import BaseGrid from './Basegrid'
import Map from './Map'

const QueryNear = () => {
  const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
  const [data, setData] = useState([null])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const query = {"query": `{
    stopsByRadius(lat:${campuses[0].lat},lon:${campuses[0].long},radius:500,first:4) {
      edges {
        node {
          stop {  
            name
            lat
            lon
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

  useEffect(() => {
    // Fetch to have data as soon as possible
    fetchData()
    // Interval to resend the fetch
    
    setInterval(() =>{
      fetchData()
    }, 20000)
  },[])

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

export default QueryNear