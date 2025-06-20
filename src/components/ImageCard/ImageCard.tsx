import styles from "./ImageCard.module.css";
import { UnsplashImage } from "../../types";

interface ImageCardProps {
  imageData: UnsplashImage;
  onClick: () => void;
}

export default function ImageCard({ imageData, onClick }: ImageCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img
        src={imageData.urls.small}
        alt={imageData.alt_description || "Image"}
        className={styles.image}
        loading="lazy"
      />
    </div>
  );
}
