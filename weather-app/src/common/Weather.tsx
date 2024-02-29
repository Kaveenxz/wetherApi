import '../App.css';
import React, { useState } from 'react';

function Weather() {
  const [searchVal, setSearchVal] = useState('');
  const [temp, setTemp] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [region, setRegion] = useState('');
  const [isDay, setIsDay] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [tz_id, setTzId] = useState('');
  const [localtime, setLocaltime] = useState('');
  const [last_updated, setLastUpdated] = useState('');
  const [temp_f, setTempF] = useState('');
  const [conditionText, setConditionText] = useState('');
  const [conditionIcon, setConditionIcon] = useState('');

  const fetchData = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=e9efbd0df6294e5c9fb94321233012&q=${searchVal}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        setTemp(data.current.temp_c);
        setCountry(data.location.country);
        setDate(data.location.localtime);
        setWeather(data.current.condition.text);
        setImage(data.current.condition.icon);
        setLocation(data.location.name);
        setRegion(data.location.region);
        setIsDay(data.current.is_day);
        setWindSpeed(data.current.wind_kph);
        setLat(data.location.lat);
        setLon(data.location.lon);
        setTzId(data.location.tz_id);
        setLocaltime(data.location.localtime);
        setLastUpdated(data.current.last_updated);
        setTempF(data.current.temp_f);
        setConditionText(data.current.condition.text);
        setConditionIcon(data.current.condition.icon);
      })
      .catch(error => console.log("error", error));
  };

  return (
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
              <img src={image} alt="img" id='weather-img' />
              <h4 id='weather'>{weather}</h4>
            </div>
          </div>
        </div>

        <div className="current-info mt-3 ">
            <h4>Current Info</h4>
            <p>Last Updated: {last_updated}</p>
            <p>Temperature (Celsius): {temp}</p>
            <p>Temperature (Fahrenheit): {temp_f}</p>
            <p>Is Day: {isDay ? 'Yes' : 'No'}</p>
            <p>Condition: {conditionText}</p>
            <img src={conditionIcon} alt="Condition Icon" />
            <p>Wind Speed: {windSpeed} kph</p>
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
            <button onClick={fetchData}>Search</button>
          </div>

          
        </div>
       
          <div className="location-info mt-3">
            <h4>Location Info</h4>
            <p>Name: {location}</p>
            <p>Region: {region}</p>
            <p>Country: {country}</p>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lon}</p>
            <p>Timezone: {tz_id}</p>
            <p>Local Time: {localtime}</p>
          </div>

         
      </div>
    </div>
  );
}

export default Weather;
