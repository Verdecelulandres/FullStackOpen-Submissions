
const Course =({course})=>{
  // let sum = 0;
  // const x = course.parts.map((part)=>{sum += part.exercises})
  // console.log(sum);

  // const y = course.parts.reduce((exerciseNum, part)=>{
  //   return exerciseNum + part.exercises
  // }, 0);
  // console.log(y);
  return(  
    <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    {/** We pass the course object from App and we Reduce the value of the part exercises to send to Total */}
    <Total sum={course.parts.reduce((numOfExercises, part)=>numOfExercises + part.exercises, 0)} />
    </>
    )
}

const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p><strong>Total of {sum} exercises</strong></p>

const Part = ({ name, exercises }) => 
  <p>
    {name} {exercises}
  </p>

 const Content = ({ parts }) => parts.map((part)=> <Part key={part.id} name={part.name} exercises={part.exercises} />);
// const Content = ({ parts }) =>
//   <>
//   <Part name={parts[0].name} exercises={parts[0].exercises} />
//   <Part name={parts[1].name} exercises={parts[1].exercises} />
//   <Part name={parts[2].name} exercises={parts[2].exercises} />
//   </>


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
//map through the courses object array returning a Courses component
  return(
    <>
    <h1>Web develpment curriculum</h1> 
    {courses.map((course) => <Course key={course.id} course={course} />)}
    </>
  ) 
}

export default App
