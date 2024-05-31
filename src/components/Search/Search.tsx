import { useState } from "react";
import styles from "./Search.module.css";

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onSearch(event.target.value);
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
