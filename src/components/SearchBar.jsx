import { useState } from 'react'
import '../App.css'
import search from '../assets/search-svgrepo-com.svg'


function SearchBar({setCityWeather}){
    const [searchInput, setSearchInput] = useState("");
    let api_key = "5252c2bf0c2747b5e4279dade5c75b0b";
  
    const searchFunc = () => {
      if(searchInput.length > 0){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=Metric&appid=${api_key}`)
      .then(response => response.json())
      .then(response => setCityWeather(response));
      }else{
        alert("Please enter a city.")
      }
    }

    function handleSearch(){
        return(
            setSearchInput(previous => previous = "")
        )
    }

    return(
        <div className='top-bar'>
        <input
        className='input'
        type='text'
        placeholder='Search'
        value={searchInput}
        onChange={(event) => {setSearchInput(event.target.value)}}
        onKeyDown={(e) => {
            if(e.code == "Enter"){
                searchFunc()
            }
        }}
        />
        <div className='search-box' onClick={() => {searchFunc()}}>
            <img src={search} alt='' className='search-icon' onClick={handleSearch}/>
        </div>
      </div>
    )
}

export default SearchBar;