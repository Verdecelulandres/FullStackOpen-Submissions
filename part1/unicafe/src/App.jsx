import { useState } from "react"

const Statistics =({good, bad, neutral})=>{
  const total = good + bad + neutral;
  return(
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <hr />
      <p>All: {total}</p>
      <p>Average: {(good-bad)/total}</p>
      <p>Positive: {total=== 0 ? 0 : (good/total) * 100} %</p>
    </div>
    
  )
}
const FeedbackBtn = ({increaseFeedback, text}) => <button onClick={()=>increaseFeedback(text)}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
      <FeedbackBtn increaseFeedback={increaseFeedback} text={'good'} />
      <FeedbackBtn increaseFeedback={increaseFeedback} text={'neutral'} />
      <FeedbackBtn increaseFeedback={increaseFeedback} text={'bad'} />
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )

}

export default App
