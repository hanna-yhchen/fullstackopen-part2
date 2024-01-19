import { useState, useEffect } from 'react'
import '@/style.css'
import * as personService from '@/services/persons'
import { PersonForm } from '@/components/PersonForm'
import { Filter } from '@/components/Filter'
import { Persons } from '@/components/Persons'

export function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchPersons = async () => {
      setPersons(await personService.getAll())
    }
    fetchPersons()
  }, [])

  const addPerson = async (event) => {
    event.preventDefault()

    const existingPerson = (persons.find(person => person.name === newName))
    if (existingPerson != null) {
      handleExistingPerson(existingPerson)
      return
    }

    const newPerson = await personService.create(newName, newNumber)
    setPersons(persons.concat(newPerson))
    clearInput()
  }

  const handleExistingPerson = async (person) => {
    const shouldUpdate = confirm(
      `${person.name} is already added to phonebook. ` +
      'Do you want to replace the old number with a new one?'
    )
    if (!shouldUpdate) { return }
    person.number = newNumber
    try {
      const updatedPerson = await personService.update(person.id, person)
      setPersons(persons.map((person) =>
        person.id === updatedPerson.id ? updatedPerson : person)
      )
      clearInput()
    } catch (error) {
      alert(error)
    }
  }

  const clearInput = () => {
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = async (id, name) => {
    const shouldDelete = confirm(`Do you want to delete ${name}?`)
    if (!shouldDelete) { return }
    try {
      await personService.remove(id)
      setPersons(persons.filter((person) => person.id !== id))
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <Persons persons={persons} filter={filter} onDelete={handleDelete} />
    </div>
  )
}
