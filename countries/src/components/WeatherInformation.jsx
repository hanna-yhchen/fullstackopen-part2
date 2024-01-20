/**
 * @param {{capitalName: string, weather: WeatherInfo}}
 */
export function WeatherInformation({ capitalName, weather }) {
  if (weather == null) { return null }

  return (
    <>
      <h3>Weather in {capitalName}</h3>
      <p>{weather.description}</p>
      <img src={weather.iconUrl} />
      <p>
        Temperature: {weather.temperature} Celsius<br />
        Speed of wind: {weather.windSpeed} m/s
      </p>
    </>
  )
}
