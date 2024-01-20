export function Filter({ filter, setFilter }) {
  return (
    <label>
      Find countries: <input name='countryFilter' value={filter} onChange={(e) => setFilter(e.target.value)} />
    </label>
  )
}
