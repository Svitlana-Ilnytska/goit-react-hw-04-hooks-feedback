import React from "react";
import PropTypes from "prop-types";

import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <ul className={css.buttonList}>
      {Object.keys(options).map((button) => {
        return (
          <li key={button} className={css.buttonItem}>
            <button type="button" onClick={onLeaveFeedback}>
              {button}
            </button>
          </li>
        );
      })}
    </ul>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
