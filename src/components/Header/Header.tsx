import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SearchMovie from "../SearchMovie/SearchMovie";
import SearchTv from "../SearchTv/SearchTv";
import {
  HeaderContainer,
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
      <Logo>My Films</Logo>
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
      <FavoritesLink to="/favorites">Favorites</FavoritesLink>
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
