import { useState } from "react";
import { Filter } from "./Filter";
import { PersonForm } from "./PersonForm";
import { Person } from "./Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNro, setNewNro] = useState("");
  const [filter, setFilter] = useState("");
  const [personsFiltered, setPersonsFiltered] = useState(persons);

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNro = (event) => {
    setNewNro(event.target.value);
  };

  const handleFilter = (event) => {
    let newFilter = event.target.value;
    setPersonsFiltered(
      persons.filter((person) => person.name.includes(newFilter))
    );
    setFilter(newFilter);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const even = (element) => element.name === newName;

    if (persons.some(even)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(
        persons.concat({
          name: newName,
          number: newNro,
          id: persons.length + 1,
        })
      );
    }
    setNewName("");
    setNewNro("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        handleNewName={handleNewName}
        handleNewNro={handleNewNro}
        newName={newName}
        newNro={newNro}
      />
      <h2>Numbers</h2>
      {filter === ""
        ? persons.map((person) => (
            <div key={person.id}>
              <Person person={person} />
            </div>
          ))
        : personsFiltered.map((person) => (
            <div key={person.id}>
              <Person person={person} />
            </div>
          ))}
    </div>
  );
};

export default App;
