import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.section`
  margin: auto;
  margin-top:4.5em;
  margin-bottom:5.25em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 38.5em;
`;

export const Title = styled.h1`
  position: relative;
  height: 87px;
  font-family: "Oranienbaum";
  font-style: normal;
  font-weight: 400;
  font-size: 75.3104px;
  line-height: 87px;
  color: #000000;
`;

export const NavbarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Oranienbaum";
  font-style: normal;
  font-weight: 400;
  font-size: 30.6068px;
  line-height: 35px;
  color: black;
  width: 160.22px;
  height: 61.58px;
  background: white;
  border: none;
  text-decoration: none;

  &:active {
    background-color: #000000;
    color: #ffffff;
    border-radius: 14px;
  }
`;

// export const Button=styled.button`
// font-family: 'Oranienbaum';
// font-style: normal;
// font-weight: 400;
// font-size: 30.6068px;
// line-height: 35px;
// color: black;
// width: 160.22px;
// height: 61.58px;
// left: 678.1px;
// top: 69.29px;
// background: white;
// border:none;

// :focus{
//   background-color: #000000;
//   color: #FFFFFF;
//   border-radius: 14px;

// }

// `
