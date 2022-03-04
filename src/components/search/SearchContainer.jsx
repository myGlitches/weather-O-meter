import React, { useEffect, useState } from "react"
import SearchWeather from "./SearchWeather"
import ShowWeather from "./ShowWeather"

function SearchContainer() {
  const [name, setName] = useState("")
  const [visibilty, setVisibility] = useState(
    <h2>
      This is a Weather App which shows the weather data of searched places
    </h2>
  )
  const [skyData, setSkyData] = useState({})

  const addWeather = (newWeather) => {
    setName(newWeather)
    setVisibility(<ShowWeather data={skyData} />)
  }

  async function fetchData(name) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      const data = await response.json()
      console.log(data)
      setSkyData(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData(name)
  }, [name])

  return (
    <div className="searchandTextContainer">
      <div className="searchContent">
        <SearchWeather data={skyData} handleAdd={addWeather} />
      </div>
      <div className="textContent">{visibilty}</div>
    </div>
  )
}

export default SearchContainer
