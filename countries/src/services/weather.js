import axios from 'axios'

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

/**
 * @param {CapitalInfo} capital
 * @returns {Promise<WeatherInfo>}
 */
export async function getWeather(capital) {
  const response = await axios.get(`${baseUrl}?units=metric&lat=${capital.lat}&lon=${capital.lon}&appid=${apiKey}`)
  const data = response.data
  return {
    description: data.weather[0].description,
    temperature: data.main.temp,
    windSpeed: data.wind.speed,
    iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  }
}
