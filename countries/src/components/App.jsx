import { useState, useEffect } from 'react'
import * as countryService from '@/services/countries'
import { Filter } from '@/components/Filter'
import { Countries } from '@/components/Countries'

export function App() {
  /** @type {useState<Country[]>} state */
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await countryService.getAll())
    }
    fetchCountries()
  }, [])

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <Countries countries={countries} filter={filter} />
    </div>
  )
}
