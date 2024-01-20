import { useEffect, useState } from 'react'
import * as weatherService from '@/services/weather'
import { WeatherInformation } from './WeatherInformation'

/**
 * @param {{country: Country}}
 */
export function CountryInformation({ country }) {
  const [weather, setWeather] = useState()

  useEffect(() => {
    const fetchWeather = async () => {
      setWeather(await weatherService.getWeather(country.capital))
    }
    fetchWeather()
  }, [country.capital])

  return (
    <>
      <h2>{country.name}</h2>
      <p>
        Region: {country.region}<br />
        Capital: {country.capital.name}<br />
        Area: {country.area}
      </p>
      <h3>Languages</h3>
      <ul style={{ marginBottom: '1em' }}>
        {country.languages?.map((language) => <li key={language}>{language}</li>
        )}
      </ul>
      <img src={country.flagImage.url} alt={country.flagImage.alt} />
      <WeatherInformation capitalName={country.capital.name} weather={weather} />
    </>
  )
}
