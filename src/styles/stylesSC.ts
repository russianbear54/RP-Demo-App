import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {styles} from './index'

export const NavWrapper = styled.section`
  margin: auto;
  margin-top: 4.5em;
  margin-bottom: 5.25em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 38.5em;

  ${styles.screen.smallScreen} {
    width: 28em;
  }

   ${styles.screen.iPadMini}  {
    margin-top: 5.5em;
    margin-bottom:2em;
    width: 18em;
  }


`;

export const Title = styled.h1`
  position: relative;
  height: 1.25em;
  font-family: ${styles.font.regular};
  font-style: normal;
  font-weight: 400;
  font-size: 4.75em;
  color: #000000;

  ${styles.screen.smallScreen} {
    font-size: 3em;
  }

   ${styles.screen.iPadMini}  {
    font-size: 2em;
  }


`;

export const NavbarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family:  ${styles.font.regular};
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
    background-color: #000000;
    color: #ffffff;
    border-radius: 14px;
  }

  ${styles.screen.smallScreen} {
    font-size: 1.5em;
  }

   ${styles.screen.iPadMini}  {
    font-size: 1.25em;
  }

  
`;
