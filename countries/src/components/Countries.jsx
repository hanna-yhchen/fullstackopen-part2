import { CountryInformation } from './CountryInformation'
import { CountryItem } from './CountryItem'

/**
 * @param {{ countries: Country[], filter: string}}
 */
export function Countries({ countries, filter }) {
  if (filter === '') { return null }

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(filter)
  )
  const length = filteredCountries.length

  if (length === 0) {
    return <p>No matching country was found.</p>
  } else if (length === 1) {
    return (
      <div>
        <CountryInformation country={filteredCountries[0]} />
      </div>
    )
  } else if (length <= 10) {
    return (
      <ul>
        {filteredCountries.map((country) =>
          <CountryItem key={country.name} country={country} />
        )}
      </ul>
    )
  } else {
    return <p>Too many matches. Please specify another filter</p>
  }
}
