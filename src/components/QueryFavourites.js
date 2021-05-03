import React, { useState, useEffect } from 'react';
import BaseGridFav from './BasegridFav'

const QueryFav = () => {
  const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  var IDs = [
    {
      id: "HSL:1140447"
    },
    {
      id: "HSL:6150219"
    },
  ]

  const fetchData = () => {

    for(var i = 0; i < IDs.length; i++){
      
      fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"query": `{
          stop(id: "${IDs[i].id}") {
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
        }),
      }).then(res => res.json())
      .then(resData => {
        console.log("resData", resData.data.stop.name)
        setData(data.concat(resData.data))
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        console.error(error)
      })
    }
  }

  useEffect(() => {
    // Fetch to have data as soon as possible
    fetchData()   
    // Interval to resend the fetch
    setInterval(() =>{   
      fetchData()   
    }, 10000)
  },[])

  console.log("allData", data)

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