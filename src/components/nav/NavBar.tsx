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
      <NavbarLink className={({ isActive }) => (isActive ? "active" : undefined)} to="/lists">
        Lists
      </NavbarLink>
    </NavWrapper>
  );
};

export default NavBar;


