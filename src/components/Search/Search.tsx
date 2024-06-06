import { useState, ChangeEvent } from "react";
import styles from "./Search.module.scss";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search for movies..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
