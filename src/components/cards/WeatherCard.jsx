import { useEffect, useState } from "react"

function WeatherCard({ title }) {
  const [weatherData, setWeatherData] = useState({})

  // Fetch Data
  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${title}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      const data = await response.json()
      setWeatherData(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!weatherData.main) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="card">
      <div className="cardTitle">{weatherData.name}</div>
      <div className="cardWeatherContainer">
        <h3>The Current Temp is: </h3>
        <div>
          <div className="temp">
            <strong>{weatherData.main.temp}° C</strong>
          </div>
          <div className="weatherPic">{/* img to be added */}</div>
        </div>
      </div>
      <div className="cardForecast">
        <h3>How it looks</h3>
      </div>
    </div>
  )
}

export default WeatherCard
