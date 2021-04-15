import React, { useState, useEffect } from 'react';
import campuses from '../Campuses';
import BaseGridFav from './BasegridFav'

const QueryFav = () => {
  const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
  const [data, setData] = useState([null])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const query = {"query": `{
    stopsByRadius(lat:${campuses[1].lat},lon:${campuses[1].long},radius:500,first:4) {
      edges {
        node {
          stop {  
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

  const queryFav1 = {"query": `{
    stop(id: "HSL:1140447") {
      name
      stoptimesWithoutPatterns {
        realtimeArrival
        headsign
        trip{
          routeShortName
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
          <BaseGridFav data={data}/>
        </div>
      )}
    </div>
  )
}

export default QueryFav