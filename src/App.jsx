import React from 'react';
import Button from 'components/Button/Button';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
class App extends React.Component {
  state = { good: 0, neutral: 0, bad: 0 };

  feadbackValue = state => Object.keys(state);

  onBtnClick = val => {
    this.setState(prevState => ({
      [val]: prevState[val] + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { bad, good, neutral } = this.state;
    return (
      <>
        <Section wrapper={'Please leave feedback'}>
          <Button
            content={this.feadbackValue(this.state)}
            onBtnClick={this.onBtnClick}
          />
        </Section>

        <Section wrapper={'Statistics'}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
  }
}

export default App;
