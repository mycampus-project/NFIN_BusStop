import React, { useState, useEffect } from 'react';
import campuses from '../Campuses';
import BaseGrid from './Basegrid'

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

  const fetchData = (abortCont) => {
    setTimeout(() => {
      fetch(url, requestOptions, { signal: abortCont.signal})
      .then(res => res.json())
      .then(data => {
        setData(data.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        console.error(error)
      })
    }, 100)
  }

  useEffect(() => {

    const abortCont = new AbortController();
    // Fetch to have data as soon as possible
    fetchData(abortCont)
    // Interval to resend the fetch
    
    setInterval(() =>{
      fetchData(abortCont)
    }, 20000)
    return () => abortCont.abort()
    
  },[])

  console.log("query2", data)

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