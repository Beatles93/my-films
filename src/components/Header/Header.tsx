import { useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleFilmsClick = () => {
    setQuery(""); // Очищаем запрос при переходе на страницу фильмов
    navigate("/films"); // Переходим на страницу фильмов
  };

  const handleTvShowClick = () => {
    setQuery(""); // Очищаем запрос при переходе на страницу TV Show
    navigate("/tvshow"); // Переходим на страницу TV Show
  };

  const isFilmsPage = location.pathname === "/films";
  const isTvShowPage = location.pathname === "/tvShow";

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
        {isTvShowPage && (
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Search for TV shows..."
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
