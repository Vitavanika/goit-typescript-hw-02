import styles from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }: { message?: string }) {
  return (
    <div className={styles.errorContainer}>
      <p className={styles.errorMessage}>
        {message ||
          "Oops! Something went wrong. Please try reloading the page."}
      </p>
    </div>
  );
}
