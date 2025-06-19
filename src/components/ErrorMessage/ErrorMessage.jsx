import styles from './ErrorMessage.module.css';

function ErrorMessage({ message }) {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>{message || 'Oops! Something went wrong. Please try reloading the page.'}</p>
    </div>
  );
}

export default ErrorMessage;