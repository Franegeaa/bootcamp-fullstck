/* eslint-disable react/prop-types */
import { Part } from './Part'

export const Content = ({parts}) => {
    let totalExercises = 0;
    parts.forEach(part => {
        totalExercises =+ part.exercises;
    });

    console.log(totalExercises)
    return (
        <div>
            {parts.map(part => <Part key={part.id} part={part}></Part>)}
            <p><strong>total of {totalExercises} exercises</strong></p>
        </div>
    )
}