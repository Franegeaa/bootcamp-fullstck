import React, { useState } from 'react';
import Button from './Button';
import StatisticLine from './StatisticLine';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    contador: 0,
    average: 0,
  });

  const handleFeedback = (type) => {
    let { good, neutral, bad, contador, average } = feedback;
    switch (type) {
      case 'good':
        good++;
        average++;
        contador++;
        break;
      case 'neutral':
        neutral++;
        contador++;
        break;
      case 'bad':
        bad++;
        average--;
        contador++;
        break;
      default:
        break;
    }
    setFeedback({ good, neutral, bad, contador, average });
  };

  const positivePercentage = (feedback.good / feedback.contador) * 100;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => handleFeedback('good')} text="Good" />
      <Button handleClick={() => handleFeedback('neutral')} text="Neutral" />
      <Button handleClick={() => handleFeedback('bad')} text="Bad" />
      {feedback.contador > 0 ? (
        <div>
          <h2>Statistics</h2>
          <table>
            <tbody>
              <StatisticLine text="Good" value={feedback.good} />
              <StatisticLine text="Neutral" value={feedback.neutral} />
              <StatisticLine text="Bad" value={feedback.bad} />
              <StatisticLine text="Total" value={feedback.contador} />
              <StatisticLine text="Average" value={feedback.average / feedback.contador} />
              <StatisticLine text="Positive %" value={positivePercentage.toFixed(2)} />
            </tbody>
          </table>
        </div>
      ) : (
        <h2>No feedback given</h2>
      )}
    </div>
  );
};

export default App;
