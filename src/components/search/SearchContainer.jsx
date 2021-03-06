import React, { useEffect, useState } from "react"
import SearchWeather from "./SearchWeather"
import ShowWeather from "./ShowWeather"

function SearchContainer() {
  const [weatherData, setWeatherData] = useState({})

  return (
    <div className="searchandTextContainer">
      <div className="searchContent">
        <SearchWeather setWeatherData={setWeatherData} />
      </div>
      <div className="textContent">
        {Object.keys(weatherData).length !== 0 ? (
          <ShowWeather data={weatherData} />
        ) : (
          <h2>
            This is a Weather App which can show the temperature of any city.{" "}
          </h2>
        )}
      </div>
    </div>
  )
}

export default SearchContainer
