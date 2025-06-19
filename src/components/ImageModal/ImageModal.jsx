import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    overflow: "hidden",
    maxWidth: "90vw",
    maxHeight: "90vh",
    closeButtonClassName: css.closeButton,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 999,
  },
  base: {
    borderRadius: "8px",
    boxShadow: "0 5px 15px rgba(0, 77, 64, 0.3)",
  },  
};

function ImageModal({ isOpen, onRequestClose, imageData }) {
  if (!imageData) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div className={css.modalContent}>
        <img
          src={imageData.urls.regular}
          alt={imageData.alt_description || "Image"}
          className={css.modalImage}
        />
        <div className={css.imageInfo}>
          {imageData.description && <p>{imageData.description}</p>}
          <p>Autor: {imageData.user.name}</p>
          <p>Likes: {imageData.likes}</p>
          <p>Upload date: {imageData.created_at.split("T")[0]} </p>
          <p>Size: {imageData.width}x{imageData.height}</p>
        </div>
      </div>
    </Modal>
  );
}

export default ImageModal;
