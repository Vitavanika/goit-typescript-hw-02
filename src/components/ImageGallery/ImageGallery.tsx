import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import { UnsplashImage } from "../../types";

interface ImageGalleryProps {
  items: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
}
export default function ImageGallery({ items, onImageClick }: ImageGalleryProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul className={styles.gallery}>
      {items.map((item) => (
        <li key={item.id} className={styles.galleryItem}>
          <ImageCard imageData={item} onClick={() => onImageClick(item)} />
        </li>
      ))}
    </ul>
  );
}
