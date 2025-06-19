import styles from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onClick }) {
  return (
    <button type="button" className={styles.loadMoreButton} onClick={onClick}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;