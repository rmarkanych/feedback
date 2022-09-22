import { useState } from 'react';
import Button from 'components/Button/Button';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const content = ['good', 'neutral', 'bad'];

  const onBtnClick = item => {
    if (item === 'good') setGood(s => s + 1);
    if (item === 'bad') setBad(s => s + 1);
    if (item === 'neutral') setNeutral(s => s + 1);
  };

  const countTotalFeedback = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  return (
    <>
      <Section wrapper={'Please leave feedback ⬇'}>
        <Button content={content} onBtnClick={onBtnClick} />
      </Section>
      <Section
        wrapper={
          countTotalFeedback() !== 0
            ? 'Statistics'
            : 'Statistics field is empty'
        }
      >
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="Please leave feadback ⬆" />
        )}
      </Section>
    </>
  );
};

export default App;
