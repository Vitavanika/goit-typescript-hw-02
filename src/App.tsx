import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import styles from "./App.module.css";
import { UnsplashImage } from "./types";

const ACCESS_KEY: string = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
axios.defaults.baseURL = "https://api.unsplash.com";

export default function App() {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchImages = async ( searchQuery: string, pageNum: number ): Promise<void> => {
    if (!searchQuery.trim()) {
      setImages([]);
      setTotalPages(0);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get("/search/photos", {
        params: {
          query: searchQuery,
          page: pageNum,
          per_page: 12,
          client_id: ACCESS_KEY,
          orientation: "landscape",
        },
      });

      setImages((prevImages) =>
        pageNum === 1
          ? response.data.results
          : [...prevImages, ...response.data.results]
      );
      setTotalPages(response.data.total_pages);
      if (response.data.results.length === 0 && pageNum === 1) {
        toast.error("No images found.");
        setError(
          "No images found for your query. Please try a different search term."
        );
      }
    } catch (err) {
      setError("Failed to fetch images. Please try again later.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!query && page === 1) {
      setImages([]);
      setTotalPages(0);
      setError(null);
      return;
    }
    if (query) {
      fetchImages(query, page);
    }
  }, [query, page]);

  const handleSearchSubmit = (newQuery: string) => {
    if (query === newQuery && page === 1 && images.length > 0) return;
    setQuery(newQuery);
    setPage(1);
    if (!newQuery.trim()) {
      setImages([]);
      setTotalPages(0);
      setError(null);
    } else {
      setImages([]);
      setTotalPages(0);
    }
  };

  const handleClearSearch = () => {
    setQuery("");
    setImages([]);
    setPage(1);
    setTotalPages(0);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageData: UnsplashImage) => {
    setSelectedImage(imageData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.appContainer}>
      <Toaster
        position="top-right"
        toastOptions={{
          error: {
            duration: 4000,
            style: {
              background: "#FF4B4B",
              color: "#fff",
            },
          },
        }}
      />
      <SearchBar
        onSubmit={handleSearchSubmit}
        onClearSearch={handleClearSearch}
        currentQueryActive={images.length > 0 || error !== null}
      />
      {error && images.length === 0 && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          imageData={selectedImage}
        />
      )}
    </div>
  );
}
