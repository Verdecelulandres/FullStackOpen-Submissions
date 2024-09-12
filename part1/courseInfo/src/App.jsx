const Header = (props) => {
  console.log(`This is being rendered in Header ${props}`);
  return(
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
  console.log(`This is being rendered in Part ${props}`);
  return(
    <p>{props.contentName} {props.numOfExercises}</p>
  )
}

const Content = (props) => {
  return(
    <div>
     <Part contentName={props.part1} numOfExercises={props.exercises1} />
     <Part contentName={props.part2} numOfExercises={props.exercises2} />
     <Part contentName={props.part3} numOfExercises={props.exercises3} />
    </div>
  )
}
const Total = (props) => {
  console.log(`This is being rendered in total ${props}`);
  return(
    <p>Number of Exercises {props.total}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return(
    <div>
      <Header course={course} />
      <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App;