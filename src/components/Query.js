import React, { useState, useEffect } from 'react';

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
            cursor
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }` }
  
    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query3),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      //setData(data.data)
    })
    .catch(err => {
      console.error("Error fetching data:", err)

    })
  },[url])

  if (data){
    return (
      <div>
        {data.name}
      </div>
    )
  }  
  return (
    <div>Loading ..</div>
  )
  
}

export default Query