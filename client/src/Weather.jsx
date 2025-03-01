import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Weather = () => {
  let api = "https://weather.suhail.app/file";
  const [data , setData] = useState([])
 
  const weatherApi = async ()=>{
    try {
      let outPut = await axios.get(api)
      console.log(outPut.data);
      setData(outPut.data);
      // console.log(setData);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{

  })
  

  return (
    <>
      <div>
      
        <h1>Wather Data</h1>
        {data.map((item, index) => {
          return (
            <>
              <p>state {item.state}</p>
              <p>city {item.city}</p>
              <p>temperature {item.temperature_celsius}</p>
              <p>humidity {item.humidity}</p>
              <p>condition {item.condition}</p>
              <br />
              <hr />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Weather

/*
useEffect is a React Hook that lets you to perform side effects in function scomponents  

side effects include data fetching subscriptions manually changing the Dom and more 

scenario                                Dependency Array                              when Does it run?

Rune on every render                   useEffect(()=>{})                              Runs after every render
Runs only once (on mount)              useEffect(()=>{},[])                           runs only after the first render
runs when dependencies change          useEffect(()=>{},[dependency])                 runs onlu when dependency changes
runs on mount and cleanup on unmount   useEffect(()=>{reture ()=> {}},[])             runs once ten cleanup pn unmount
Runs on dependency update and cleanup  useEffect(()=>{reture ()=>{}},[dependency])    runs on dependency changes cleanup before the next run
before re-running 

*/