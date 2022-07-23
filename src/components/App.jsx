import {  useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedBackOptions from './FeedBackOptions/FeedBackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';


export const App = () => {
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);

  const handleClickButton = e => {
    const buttonName = e.target.textContent.toLowerCase();

    switch (buttonName) {
      case 'bad':
        setBad(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'good':
        setGood(state => state + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    let total = 0;
    total = bad + neutral + good;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let rate = Math.round((good / countTotalFeedback()) * 100);
    return rate;
  };

  return (
    <div>
      <Section title="Please leave a feedback">
        <FeedBackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClickButton}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
