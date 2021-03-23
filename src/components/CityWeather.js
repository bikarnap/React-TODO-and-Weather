import React from 'react'

import Suggestions from './Suggestions';

const CityWeather = (props) => {
  const {
    city,
    currentCity,
    temperature, 
    weatherImage, 
    handleCityChange, 
    handleCurrentCity, 
    handleAddSuggestion,
    suggestions,
    weatherDesc
  } = props; 

  const weatherImageStyle = {
    width: '85px', 
    height: '85px', 
    borderRadius: '50%'
  }

  // const inputStyles = {
  //   width: '90%',
  //   minHeight: '30px', 
  //   margin: '0 auto', 
  //   display: 'block', 
  //   borderRadius: '4px',
  //   fontSize: '16px'
  // }

  const buttonStyles = {
    width: '100px', 
    minHeight: '30px', 
    display: 'block',
    margin: '10px auto'
  }
  
  return(
    <div>
      <h1 style={{marginTop: '5px'}}>Get weather information</h1>
      <form onSubmit={handleCurrentCity}>
        <input 
          className="inputStyles"
          type="text" 
          onChange={handleCityChange} 
          value={city} 
          placeholder="Enter a city name"
        />
        <button style={buttonStyles}>Get Weather</button>
      </form>
      <h2>Weather in {currentCity.charAt(0).toUpperCase() + currentCity.slice(1)}</h2>
      <h1>{temperature} &deg;C</h1>
      <h3>{weatherDesc}</h3>
      <p><img src={weatherImage} style={weatherImageStyle} alt="weather icon" /></p>
      <div>
      <Suggestions
        suggestions={suggestions}
        addSuggestion={handleAddSuggestion}
        weatherDesc={weatherDesc}
      />
      </div>
    </div>
  )
}

export default CityWeather