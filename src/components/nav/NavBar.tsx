
import {  useState } from "react";

import { BurgersIcons } from "../../images/BurgersIcons";
import { styles } from "../../styles";
import { HamburgerButton, HamburgerNav, HamburgerNavbarLink, HamburgerNavigationItems, NavbarLink, NavButtonWrapper } from "../../styles/stylesSC";

const NavBar: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  console.log('I rendered!');



  return (
    <>
      <HamburgerNav>
        <HamburgerButton
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}>
          {BurgersIcons.filled(45, `${styles.color.black}`)}
        </HamburgerButton>
        {isNavExpanded && (
          <HamburgerNavigationItems>
            <HamburgerNavbarLink to="/home">Home</HamburgerNavbarLink>

            <HamburgerNavbarLink to="/form">Form</HamburgerNavbarLink>

            <HamburgerNavbarLink to="/ships">Ships</HamburgerNavbarLink>

            <HamburgerNavbarLink to="/countries">Countries</HamburgerNavbarLink>
          </HamburgerNavigationItems>
        )}
      </HamburgerNav>
      <NavButtonWrapper>
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
      </NavButtonWrapper>
    </>
  );
};

export default NavBar;


// to={`${"/home"}`||`${"/"}`}