import { Part } from "./Part.jsx";

export const Content = ({ parts }) => {
  let initialValue = 0;
  const totalExercises = parts.reduce(
    (acumulator, currentValue) => acumulator + currentValue.exercises,
    initialValue
  );

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part}></Part>
      ))}
      <p>
        <strong>total of {totalExercises} exercises</strong>
      </p>
    </div>
  );
};
