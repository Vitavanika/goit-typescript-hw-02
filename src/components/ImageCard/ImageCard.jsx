import styles from './ImageCard.module.css';

function ImageCard({ imageData, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img
        src={imageData.urls.small}
        alt={imageData.alt_description || 'Image'}
        className={styles.image}
        loading="lazy"
      />
    </div>
  );
}

export default ImageCard;