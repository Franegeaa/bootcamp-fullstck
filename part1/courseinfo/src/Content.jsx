/* eslint-disable react/prop-types */
import { Part } from "./Part"

export function Content  (props) {
    return(
        <div>
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </div>
    )
  }