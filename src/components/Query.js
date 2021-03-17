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
    .then(res => {
      if (res.ok) {
        console.log(res)
      }
      //throw res;

    })
    .then(res => {
      //console.log(res)
      setData(res)
    })
    .catch(err => {
      console.error("Error fetching data:", err)
      
      //setError(err)
    })
    /*.finally( ()=> {
      setLoading(false)
    })*/
  },[url])

  if (data){
    return (
      <div>
        {data.data}
      </div>
    )
  }  

  return (
    <div>{}</div>
  )
  
}

export default Query