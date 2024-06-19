import React, { useState, ChangeEvent } from "react";
import { SearchContainer, SearchInput } from "./styles-components";

interface SearchTvProps {
  onSearch: (query: string) => void;
}

const SearchTv: React.FC<SearchTvProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for TV shows..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
};

export default SearchTv;
