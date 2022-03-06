function ShowWeather({ data }) {
  if (!data.main) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h1>Temp is: {data.main.temp} deg C</h1>
      <p>Every other required data can be shown here as well</p>
    </div>
  )
}

export default ShowWeather
