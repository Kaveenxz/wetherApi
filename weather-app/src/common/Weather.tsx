import '../App.css';
import React, { useState } from 'react';


function Weather(){
    const [searchVal, setSearchVal] = useState('');
    const [temp, setTemp] = useState('');
    const [country, setCountry] = useState('');
    const [date, setDate] = useState('');
    const [weather, setWeather] = useState('');
    const [image, setImage] = useState('');
  
    const fetchData = () => {
      fetch(`http://api.weatherapi.com/v1/current.json?key=e9efbd0df6294e5c9fb94321233012&q=${searchVal}`)
        .then(response => response.json())
        .then(data => {
         
          console.log(data);
          
          setTemp(data.current.temp_c);
          setCountry(data.location.country);
          setDate(data.location.localtime);
          setWeather(data.current.condition.text);
          setImage(data.current.condition.icon)
         
        })
        .catch(error => console.log("error", error));
    };
  
    return(
        <div className='container row'>
        <div className="col-8">
          <div className='l-side'>
            <h4 className='title'>The Weather</h4>
  
            <div className="content">
              <h4 id='temp'>{temp}</h4>
              <div className="countr">
                <h4 id='country'>{country}</h4>
                <h4 id='date'>{date}</h4>
              </div>
              <div className="img">
                <img src={image}id='weather-img' />
                <h4 id='weather'>{weather}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className='r-side'>
            <div className="search">
              <input
                type="search"
                placeholder='Enter Location'
                id='searchVal'
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              />
              <button onClick={fetchData}>Search </button>
            </div>
  
            <div className="weather-details">
              <h4>Weather Details</h4>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Weather;