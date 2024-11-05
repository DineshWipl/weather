import React from 'react';
import axios from 'axios';
import{useState, useEffect} from 'react'
import { AxiosError } from '../../../node_modules/axios/index';
 


const Weather = ({city}) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchWeather = async () => {
       try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=360ba50f17065466b0d5ca484478a74d&units=metric`
        );
        setWeather(response.data);
       } catch (error) {
        // console.error("Error fetching weather data:", error);

       }
       finally {
        setLoading(false);
      }
      };
  
      fetchWeather();
    }, [city]);
  
    if (loading) {
      return <div>Loading...</div>;
    }

  

  return (
    <div>
    {weather ? (
      <>
        <h3 className='text-xl pb-2 pt-8'>  {weather.name}</h3>
        <p className='flex justify-between'><span style={{color:"rgb(248 164 0)", fontSize:"15px", textAlign:"left"}}>Temperature:</span><span  style={{textAlign:"right"}}> {weather.main.temp} °C</span></p>
        <p className='flex justify-between'><span style={{color:"rgb(248 164 0)", fontSize:"15px", textAlign:"left"}}>Condition:</span><span  style={{textAlign:"right"}}> {weather.weather[0].description}</span></p>
        <p className='flex justify-between'><span style={{color:"rgb(248 164 0)", fontSize:"15px", textAlign:"left"}}>Humidity:</span><span  style={{textAlign:"right"}}> {weather.main.humidity}</span></p>
        <p className='flex justify-between'><span style={{color:"rgb(248 164 0)", fontSize:"15px", textAlign:"left"}}>Visibility:</span><span  style={{textAlign:"right"}}> {weather.visibility}</span></p>
      </>
    ) : (
      <p>Could not fetch weather data</p>
    )}
  </div>
  )
}

export default Weather