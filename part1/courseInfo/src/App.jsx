const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
  return(
    <p>{props.contentName} {props.numOfExercises}</p>
  )
}

const Content = (props) => {
  return(
    <div>
     <Part contentName={props.parts[0].name} numOfExercises={props.parts[0].exercises} />
     <Part contentName={props.parts[1].name} numOfExercises={props.parts[1].exercises} />
     <Part contentName={props.parts[2].name} numOfExercises={props.parts[2].exercises} />
    </div>
  )
}
const Total = (props) => {
  return(
    <p>Number of Exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]



  return(
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;