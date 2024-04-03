import { Header } from "./Header.jsx";
import { Content } from "./Content.jsx";

export const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts}></Content>
          </div>
        );
      })}
    </>
  );
};
