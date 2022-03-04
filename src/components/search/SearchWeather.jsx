import { useState } from "react"

function SearchWeather({ handleAdd }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newWeather = text
    handleAdd(newWeather)
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
