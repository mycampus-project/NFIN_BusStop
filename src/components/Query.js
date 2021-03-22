import React, { useState, useEffect } from 'react';

const Query = () => {
  const url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
  const [data, setData] = useState([null]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "query": `{
        stop(id: \"HSL:1040129\") {
          name
          lat
          lon
        }
      }` }),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.data)
      console.log(data.data.stop)
      setData(data.data.stop)
    })
    .catch(err => {
      console.error("Error fetching data:", err)

    })
  },[url])

  let dis = toString([data])
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