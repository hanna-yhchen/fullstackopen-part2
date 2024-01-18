export function Persons({ persons, filter }) {
  return (
    <table>
      <tbody>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ name, number }) =>
            <tr key={name}>
              <td>{name}</td>
              <td>{number}</td>
            </tr>
          )}
      </tbody>
    </table>
  )
}
