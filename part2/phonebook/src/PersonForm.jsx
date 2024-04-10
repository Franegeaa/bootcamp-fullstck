/* eslint-disable react/prop-types */
export const PersonForm = ({
  addPerson,
  handleNewName,
  handleNewNro,
  newName,
  newNro,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={newNro} onChange={handleNewNro} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
