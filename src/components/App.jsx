import React, { Component } from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Notification } from './notification/Notification';
import { Statistics } from './statistics/Statistics';
import { Section } from './section/Section';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickBtn = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
  render() {
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback!">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onClickBtn}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() === 0 ? (
            <Notification Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
