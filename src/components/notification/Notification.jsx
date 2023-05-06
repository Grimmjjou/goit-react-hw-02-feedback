import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export function Notification({ message }) {
  return <p className={styles.notificationText}>{message}</p>;
}
Notification.propTypes = { message: PropTypes.string.isRequired };
