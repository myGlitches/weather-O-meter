import WeatherCard from "./WeatherCard"
function Cards() {
  return (
    <div className="allCards">
      <WeatherCard title="Delhi" />
      <WeatherCard title="London" />
      <WeatherCard title="Kolkata" />
      <WeatherCard title="New York" />
    </div>
  )
}

export default Cards
