/* eslint-disable react/prop-types */
export function Part (props){
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}