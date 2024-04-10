import { useState, useEffect } from "react";
import { Filter } from "./Filter";
import { PersonForm } from "./PersonForm";
import { Person } from "./Person";
import { getAll, createContact, deleteContact } from "./services/contacts";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNro, setNewNro] = useState("");
  const [filter, setFilter] = useState("");
  const [personsFiltered, setPersonsFiltered] = useState(persons);
  const [message, setMessage] = useState(null);

  const handleDelete = (person) => {
    return () => {
      if (window.confirm(`Delete ${person.name}?`)) {
        deleteContact(person.id).then(() => {
          setPersons(persons.filter((p) => p.id !== person.id));
        });
      }
    };
  
  }

  useEffect(() => {
    getAll().then((response) => setPersons(response));
  }, []);

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
    const personObject = {
      name: newName,
      number: newNro,
    };

    if (persons.some(even)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      createContact(personObject).then((response) => {
        setPersons(persons.concat(response));
        setMessage(`Contact ${personObject.name} saved successfully!`);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      });
    }
    setNewName("");
    setNewNro("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>add a new</h2>
      {message && <div className="message">{message}</div>}
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
              <Person person={person} /> <button onClick={handleDelete(person)}>delete</button>  
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
