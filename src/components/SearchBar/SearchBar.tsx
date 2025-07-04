import { useState, FormEvent, ChangeEvent } from "react";
import toast from "react-hot-toast";
import { FiSearch, FiX } from "react-icons/fi";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
  onClearSearch: () => void;
  currentQueryActive: boolean;
}

export default function SearchBar({ onSubmit, onClearSearch, currentQueryActive }: SearchBarProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please enter a search term.");
      if (currentQueryActive && onClearSearch) {
        onClearSearch();
      }
      return;
    }
    onSubmit(inputValue.trim());
  };

  const handleClear = () => {
    setInputValue("");
    if (onClearSearch) {
      onClearSearch();
    }
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.iconButton} aria-label="Search">
          <FiSearch size={20} />
        </button>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
        {(inputValue || currentQueryActive) && (
          <button
            type="button"
            className={`${styles.iconButton} ${styles.clearButton}`}
            onClick={handleClear}
            aria-label="Clear search"
          >
            <FiX size={20} />
          </button>
        )}
      </form>
    </header>
  );
}
