import React, { Component } from "react";

import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    const count = e.target.textContent;
    this.setState((currentState) => ({
      [count]: currentState[count] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalSum = Object.keys(this.state).reduce((sum, key) => {
      return sum + this.state[key];
    }, 0);
    return totalSum;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage =
      (this.state.good * 100) / this.countTotalFeedback();
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}