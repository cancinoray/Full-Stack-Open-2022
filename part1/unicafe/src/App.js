import { useState } from 'react';
import Statistics from './Statistics';
import Button from "./Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>

      <Button click={() => setGood(good + 1)} text='good'/>
      <Button click={() => setNeutral(neutral + 1)} text='neutral' />
      <Button click={() => setBad(bad + 1)} text='bad' />

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>

  );
}

export default App;
