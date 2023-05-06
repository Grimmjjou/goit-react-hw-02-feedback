import PropTypes from 'prop-types';
import styles from './Section.module.css';

export function Section({ title, children }) {
  return (
    <>
      <h1 className={styles.feedbackTitle}>{title}</h1>
      {children}
    </>
  );
}
Section.propTypes = { title: PropTypes.string.isRequired };
