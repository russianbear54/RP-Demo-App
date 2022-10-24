import { useState } from "react";
import { NavbarLink, NavWrapper } from "../../styles/stylesSC";

const NavBar: React.FC = () => {
const [active,setActive]=useState<boolean>(false)

  return (
    <NavWrapper>
      <NavbarLink className={`${active?'active':''}`} to="/">Home</NavbarLink>
      <NavbarLink className={`${active?'active':''}`} to="/form">Form</NavbarLink>

      <NavbarLink className={`${active?'active':''}`} to="/lists">Lists</NavbarLink>
    </NavWrapper>
  );
};

export default NavBar;
