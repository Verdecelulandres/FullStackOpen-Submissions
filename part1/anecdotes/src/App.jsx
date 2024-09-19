import { useState } from "react";

const AnecdoteBlock = ({title, anecdote, pointVal}) => {
  return(
    <div>
      <h2>{title}</h2>
      <p>{anecdote}</p>
      <p>Has {pointVal} votes</p>
    </div>
  )
}

const App = () =>{

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  //console.log(points);
  const generateRandomNumber = () => {
    let nextAnecdoteIndex = Math.floor(Math.random() * anecdotes.length);
    //console.log(`Next index: ${nextAnecdoteIndex} -- Anecdote: ${anecdotes[nextAnecdoteIndex]}`);
    setSelected(nextAnecdoteIndex);
  }

  const voteUp = () =>{
    let nextPoints = [...points];
    nextPoints[selected] += 1;
    setPoints(nextPoints);
  }

  const displayMostVoted = () =>{
    /*let maxIndex = 0;
    let maxVal = 0;
    for(let i = 0; i<points.length; i++){
      if(points[i] > max) {
        max = i;
      }
    }*/
    const max = points.indexOf(Math.max(...points));
    console.log(max);
    return anecdotes[max];
  }

  return (
    <div>
      <AnecdoteBlock title={'Anecdote of the day'} anecdote={anecdotes[selected]} pointVal={points[selected]} /> 
      <button onClick={voteUp}>vote</button>
      <button onClick={generateRandomNumber}>Next Anecdote</button>
      <AnecdoteBlock title={'Anecdote with most votes'} anecdote={displayMostVoted()} pointVal={Math.max(...points)} />
    </div>
  )
}


export default App;