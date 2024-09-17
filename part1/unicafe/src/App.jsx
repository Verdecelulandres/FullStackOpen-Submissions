import { useState } from "react"

//Component definition

const StatisticLine = ({text, value}) =>{
  return(<tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>) 
} 

const Statistics =({good, bad, neutral})=>{
  const total = good + bad + neutral;
  if(total=== 0) {
    return(
      <div>No feedback given</div>
    )
  }
  return(
    <table>
      <tbody>
      <StatisticLine text='Good' value={good} />
      <StatisticLine text='Neutral' value={neutral} />
      <StatisticLine text='Bad' value={bad}/>
      <StatisticLine text='All' value={total}/>
      <StatisticLine text='Average' value={(good-bad)/total}/>
      <StatisticLine text='Positive' value={`${(good/total) * 100} %`} />
      </tbody>
    </table>
  )
}

const Button = ({increaseFeedback, text}) => <button onClick={()=>increaseFeedback(text)}>{text}</button>


//Main App being rendered
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //Handles the btn click and increases teh feedback acording to the text passed
  const increaseFeedback = (feed) => {
    let increment = 1;
    switch(feed){
      case 'good':
        increment += good;
        setGood(increment);
        break;
      case 'bad':
        increment += bad;
        setBad(increment);
        break;
      default:
        increment += neutral;
        setNeutral(increment);
        break;    
    }
    console.log(`Gave feedback on ${feed}, Now set to: ${increment}`);
  }

  return(
    <div>
      <h2>Give Feedback</h2>
      <Button increaseFeedback={increaseFeedback} text={'good'} />
      <Button increaseFeedback={increaseFeedback} text={'neutral'} />
      <Button increaseFeedback={increaseFeedback} text={'bad'} />
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )

}

export default App
