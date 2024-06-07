import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #5398cd;
  padding: 10px 20px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;
