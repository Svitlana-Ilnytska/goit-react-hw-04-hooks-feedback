import React, { useState } from "react";

import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = (e) => {
    const count = e.target.textContent;
    setState((currentState) => ({
      ...currentState,
      [count]: currentState[count] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const totalSum = Object.keys(state).reduce((sum, key) => {
      return sum + state[key];
    }, 0);
    return totalSum;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (state.good * 100) / countTotalFeedback();
    return positivePercentage;
  };

  const { good, neutral, bad } = state;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} onLeaveFeedback={onLeaveFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
}
