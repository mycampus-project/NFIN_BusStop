import React, { useState, useEffect } from 'react';
import campuses from '../Campuses';
import BaseGrid from './Basegrid'

const QueryNear = () => {
  const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
  const [data, setData] = useState([null])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Query used in fetch
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
  // RequestOptions for the fetch
  const requestOptions = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  }


  // Function goes feches data from hsl
  const fetchData = (abortCont) => {
    setTimeout(() => {
      fetch(url, requestOptions, { signal: abortCont.signal})
      .then(res => res.json())
      .then(data => {
        // After getting response save it to state 
        setData(data.data)
        setLoading(false)
      })
       // Catching errors and loging them to console
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

    // Seting interval for app to fetch the new info on bus stops

    setInterval(() =>{
      fetchData(abortCont)
    }, 20000)
    return () => abortCont.abort()
    
  },[])

  // If there is no data and loading is
  // true the BaseGrid will not be displayed

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