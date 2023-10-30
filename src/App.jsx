import { useState } from 'react';
import './App.css'
import SearchBar from './components/SearchBar'
import WeatherPart from './components/WeatherPart'
import FirstPage from './components/FirstPage'



function App() {
    const [cityWeather, setCityWeather] = useState();
      return(
          <div className='container'>
           <SearchBar setCityWeather={setCityWeather}/>
          {cityWeather ? <WeatherPart cityWeather={cityWeather}/> :
          <FirstPage/>
          }
          </div>
      )
}

export default App
