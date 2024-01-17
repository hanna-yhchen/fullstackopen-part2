import { Header } from './Header'
import { Content } from './Content'
import { Total } from './Total'

export function Course({ name, parts }) {
  const total = parts.reduce(
    (total, part) => total + part.exercises,
    0
  )

  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  )
}
