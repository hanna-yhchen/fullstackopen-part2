import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

/**
 * @returns {Promise<import('@/typedef').Country[]>}
 */
export async function getAll() {
  const response = await axios.get(`${baseUrl}/all`)
  const countries = response.data.map((object) => {
    return {
      name: object.name.common,
      officialName: object.name.official,
      region: object.region,
      capital: {
        name: object.capital?.at(0),
        lat: object.capitalInfo?.latlng?.at(0),
        lon: object.capitalInfo?.latlng?.at(1)
      },
      area: object.area,
      flagImage: {
        url: object.flags.png,
        alt: object.flags.alt
      },
      languages: Object.values(object.languages ?? {})
    }
  })
  console.log(countries)
  return countries
}
