/* eslint-disable react/prop-types */
import { Content } from "./Content"
import { Header } from "./Header"

export const Course = ({ course }) => { 
    return(
        <div>
            <Header name={course.name}></Header>
            <Content parts={course.parts}></Content>
        </div>
    )
}