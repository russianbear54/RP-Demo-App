import { NavbarLink, NavWrapper } from "../../styles/stylesSC";

const NavBar: React.FC = () => {
  return (
    <NavWrapper>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/form">Form</NavbarLink>

      <NavbarLink to="/lists">Lists</NavbarLink>
    </NavWrapper>
  );
};

export default NavBar;
