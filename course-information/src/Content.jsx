function Part({ name, exercises }) {
  return <p>{name} {exercises}</p>
}

export function Content({ parts }) {
  return (
    <>
      {parts.map(({ id, name, exercises }) =>
        <Part key={id} name={name} exercises={exercises} />
      )}
    </>
  )
}
