import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  const keys = Object.keys(options);
  return (
    <ul className={styles.feedbackBtnBox}>
      {keys.map(key => (
        <li key={key}>
          <button
            className={styles.feedbackBtn}
            key={key}
            type="button"
            name={key}
            onClick={onLeaveFeedback}
          >
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  option: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};
