import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {
  HeaderContainer,
  Logo,
  CenterContainer,
  SearchContainer,
  SearchInput,
} from "./styled-components";

interface HeaderProps {
  setQuery: (query: string) => void;
}
const Header: React.FC<HeaderProps> = ({ setQuery }) => {
  const location = useLocation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const isFilmsPage = location.pathname === "/films";

  return (
    <HeaderContainer>
      <Logo>My films</Logo>
      <CenterContainer>
        {isFilmsPage && (
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Search for movies..."
              onChange={handleInputChange}
            />
          </SearchContainer>
        )}
      </CenterContainer>
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
