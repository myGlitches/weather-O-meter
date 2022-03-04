function ShowWeather({ data }) {
  if (!data.main) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h1>{data.main.temp}</h1>
    </div>
  )
}

export default ShowWeather
