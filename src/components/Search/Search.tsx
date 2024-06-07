import { useState, ChangeEvent } from "react";
import { SearchContainer, SearchInput } from "./styled-components";

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
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for movies..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
};

export default Search;
