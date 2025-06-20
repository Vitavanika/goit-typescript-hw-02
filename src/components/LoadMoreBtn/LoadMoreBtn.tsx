import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <button type="button" className={styles.loadMoreButton} onClick={onClick}>
      Load more
    </button>
  );
}
