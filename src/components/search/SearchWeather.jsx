import { useState } from "react"

function SearchWeather({ setWeatherData }) {
  const [text, setText] = useState("")

  async function fetchData(name) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      const data = await response.json()
      setWeatherData(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData(text)
    setText("")
  }

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="searchContainer">
      <label className="searchHeading">Check The Weather!</label>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={handleTextChange}
          className="inputBar"
          type="text"
          placeholder="Type here..."
        />
        <button type="submit" className="submitBtn">
          <strong>Submit</strong>
        </button>
      </form>
    </div>
  )
}

export default SearchWeather
