import { NavbarLink, NavWrapper } from "../../styles/stylesSC";

const NavBar: React.FC = () => {
  return (
    <NavWrapper>
      <NavbarLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/home">
        Home
      </NavbarLink>
      <NavbarLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/form">
        Form
      </NavbarLink>
      <NavbarLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/ships">
        Ships
      </NavbarLink>
      <NavbarLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/countries">
        Countries
      </NavbarLink>
    </NavWrapper>
  );
};

export default NavBar;


