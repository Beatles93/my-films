import { useState } from "react";
import "./styles.css";

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search for movies..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
