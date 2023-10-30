import { useState } from 'react'
import '../App.css'
import humidity_icon from '../assets/humidity-svgrepo-com.svg'
import wind_icon from '../assets/wind-svgrepo-com.svg'

function WeatherPart({cityWeather}){
   

    return(
        <div>
        <div className='weather-image'>
        <img src={`https://openweathermap.org/img/wn/${cityWeather?.weather?.[0]?.icon}@4x.png`} alt=''/>
        </div>

        <div className='weather-temp'>
          {parseInt(cityWeather?.main?.temp)}°C 
        </div>

        <div className='weather-location'>
          {cityWeather?.name}
        </div>

        <div className='data-container'>
          <div className='element'>
            <img src={humidity_icon} alt='' className='icon'/>
            <div className='data'>
              <div className='humidity-percent'>
                {cityWeather?.main?.humidity}%
              </div>
              <div className='text'>
                Humidity
              </div>
            </div>
          </div>

          <div className='element'>
            <img src={wind_icon} alt='' className='icon'/>
            <div className='data'>
              <div className='wind-rate'>
               {cityWeather?.wind?.speed} km/h
              </div>
              <div className='text'>
                Wind Speed
              </div>
            </div>
          </div>

        </div>
        </div>
    )
}

export default WeatherPart;