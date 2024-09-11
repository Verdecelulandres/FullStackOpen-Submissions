const Header = (props) => {
  //console.log(`This is being rendered ${props.course}`)
  return(
    <h1>{props.course}</h1>
  )
}
const Part = (props) => {
  //console.log(`This is being rendered`);
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
  //console.log(`This is being rendered`)
  return(
    <p>Number of Exercises {props.total}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return(
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App;