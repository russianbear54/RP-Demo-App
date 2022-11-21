import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { styles } from "./index";

export const NavButtonWrapper = styled.section`
  margin: auto;
  margin-top: 4.5em;
  margin-bottom: 5.25em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 38.5em;

  ${styles.screen.mobileLarge} {
    display: none;
  }

  ${styles.screen.smallScreen} {
    width: 28em;
  }

  ${styles.screen.iPadMini} {
    margin-top: 5.5em;
    margin-bottom: 2em;
    width: 18em;
  }
`;

export const HamburgerNav = styled.nav`
  display: none;
 

  ${styles.screen.mobileLarge} {
    display: block;
 
  }
`;

export const HamburgerButton = styled.button`
  /* border: 0;
  height: 40px;
  width: 40px; */
border: none;
  /* border-radius: 50%; */
  background-color: ${styles.color.white};
  cursor: pointer;
  /* transition: background-color 0.2s ease-in-out; */
  top: 1.5em;
  margin: auto;
  position: relative;
  transform: translateY(-50%);
  display: none;

  ${styles.screen.mobileLarge} {
    display: block;
  }
`;

export const HamburgerNavigationItems=styled.div`

display: flex;
flex-direction: column;



`

export const Title = styled.h1`
  height: 5.4375em;
  position: relative;
  height: 1.25em;
  font-family: ${styles.font.regular};
  font-style: normal;
  font-weight: 400;
  font-size: 4.75em;
  color: ${styles.color.black};

  ${styles.screen.largeScreen} {
    font-size: 4em;
  }

  ${styles.screen.smallScreen} {
    font-size: 3em;
  }

  ${styles.screen.iPadMini} {
    font-size: 2em;
  }
`;

export const NavbarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${styles.font.regular};
  font-style: normal;
  font-weight: 400;
  font-size: 2.25em;
  color: black;
  width: 5em;
  height: 2.25em;
  background: white;
  border: none;
  text-decoration: none;

  &.active {
    background-color: ${styles.color.black};
    color: ${styles.color.white};
    border-radius: 14px;
  }

  ${styles.screen.smallScreen} {
    font-size: 1.5em;
  }

  ${styles.screen.iPadMini} {
    font-size: 1.25em;
  }
`;

export const HamburgerNavbarLink=styled(NavLink)`

font-family: ${styles.font.regular};
text-decoration: none;
padding-top: .2em;
padding-bottom: .2em;
font-size: 1.5em;
text-align: center;
color: ${styles.color.black};
width: 100%;



&.active{
  color: ${styles.color.white};
  background-color: ${styles.color.black};
}
`