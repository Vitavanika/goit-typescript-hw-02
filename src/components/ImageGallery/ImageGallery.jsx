import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

function ImageGallery({ items, onImageClick }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul className={styles.gallery}>
      {items.map(item => (
        <li key={item.id} className={styles.galleryItem}>
          <ImageCard imageData={item} onClick={() => onImageClick(item)} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;