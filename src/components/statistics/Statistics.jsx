import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <div>
        <p className={styles.statisticText}>Good: {good}</p>
        <p className={styles.statisticText}>Neutral: {neutral}</p>
        <p className={styles.statisticText}>Bad: {bad}</p>
        <p className={styles.statisticText}>Total: {total}</p>
        <p className={styles.statisticText}>
          Positive feedback:{' '}
          {Number.isNaN(positivePercentage) ? '0' : positivePercentage}%
        </p>
      </div>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
