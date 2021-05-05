import { ContactsOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import BaseGridFav from './BasegridFav'

const QueryFav = () => {
  const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // List of favorites
  // This data should come from Redux
  var IDs = [
    {
      id: "HSL:1140447"
    },
    {
      id: "HSL:6150219"
    },
  ]

  // Function goes fetches data from hsl
  const fetchData = () => {
    
    // for loop to fetch every favorite from above
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
      })
      .then(res => res.json())
      .then(resData => {
        // After getting response save it to state 
        setData(data.concat(resData.data))
        // Loading state is set to be false so the components can be shown
        setLoading(false)
      })
      // Catching errors and loging them to console
      .catch(err => {
        setError(err)
        console.error(error)
      })
    }
  }

  useEffect(() => {
    // Fetch to have data as soon as possible
    fetchData()
    
    // Seting interval for app to fetch the new info on bus stops
    setInterval(() =>{  
      setData([])
      fetchData()   
    }, 20000)
  },[])

  // If there is no data and loading is
  // true the BaseGridFav will not be displayed
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