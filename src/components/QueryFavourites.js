import React, { useState, useEffect } from 'react';
import BaseGridFav from './BasegridFav'
import favourites from '../Favourites';

const QueryFav = () => {
  const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = (abortCont) => {

    for(var i = 0; i < favourites.length; ++i){
      
      console.log("mones", i)
      const query = {"query": `{
        stop(id: "${favourites[i].id}") {
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
      }`
      }
    
      const requestOptions = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query),
      }
      
      fetch(url, requestOptions, { signal: abortCont.signal})
      .then(res => res.json())
      .then(res => {
        setData([ ... data, {
          id: data.length,
          data: res.data
        }])
        setLoading(false)
        
      })
      .catch(err => {
        setError(err)
        console.error(error)
      })
    
    }
  }

  useEffect(() => {

    const abortCont = new AbortController()
    // Fetch to have data as soon as possible
    setTimeout(() => {
      fetchData(abortCont)
    }, 500)
    // Interval to resend the fetch
    
    setInterval(() =>{  
      setTimeout(() => {
        fetchData(abortCont)
      }, 500)
    }, 20000)

    return () => abortCont.abort()
    
  },[])


  console.log("query", data)

  return (
    <div>
      { loading || !data ? (
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