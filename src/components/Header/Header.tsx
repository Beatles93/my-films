import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SearchMovie from "../SearchMovie/SearchMovie";
import SearchTv from "../SearchTv/SearchTv";
import {
  HeaderContainer,
  LogoFavoritesContainer,
  Logo,
  CenterContainer,
  SearchContainer,
  FavoritesLink,
} from "./styled-components";

interface HeaderProps {
  setQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setQuery }) => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <LogoFavoritesContainer>
        <Logo>My Films</Logo>
        <FavoritesLink to="/favorites">Favorites</FavoritesLink>
      </LogoFavoritesContainer>
      <CenterContainer>
        {location.pathname === "/films" && (
          <SearchContainer>
            <SearchMovie onSearch={setQuery} />
          </SearchContainer>
        )}
        {location.pathname === "/tvShow" && (
          <SearchContainer>
            <SearchTv onSearch={setQuery} />
          </SearchContainer>
        )}
      </CenterContainer>
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
