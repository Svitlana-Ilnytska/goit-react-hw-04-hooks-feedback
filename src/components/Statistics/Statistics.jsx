import React from "react";
import PropTypes from "prop-types";
import Notification from "./Notification";

import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  // eslint-disable-next-line
  const totalSum = total();
  // eslint-disable-next-line
  const positivePercentageSum = positivePercentage();

  return (
    <div>
      {totalSum ? (
        <>
          <h2 className={css.title}> Statistics</h2>
          <p className={css.title}> Good: {good}</p>
          <p className={css.title}> Neutral: {neutral}</p>
          <p className={css.title}> Bad: {bad}</p>
          <p className={css.title}> Total: {totalSum}</p>
          <p className={css.title}>
            Positive feedback: {positivePercentageSum} %
          </p>
        </>
      ) : (
        <div className={css.title}>
          <Notification message="There is no feedback" />
        </div>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
