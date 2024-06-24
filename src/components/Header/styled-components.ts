import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  background-color: #5398cd;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const CenterContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FavoritesLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #608bb6;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a7599;
  }
`;



