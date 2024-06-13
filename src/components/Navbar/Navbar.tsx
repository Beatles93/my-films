import {
  NavbarContainer,
  NavList,
  NavItem,
  NavLink,
} from "./styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/films">Films</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/tvShow">TV Show</NavLink> 
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
