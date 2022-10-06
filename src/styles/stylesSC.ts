import styled from "styled-components";


export const Wrapper=styled.div`
/* position: relative; */
  display: flex;
  flex-direction: column; 
  justify-content: space-around;  
  height: 1020px;
`

export const Title = styled.h1`
  position: relative; 
  height: 87px;
   font-family: "Oranienbaum";
  font-style: normal;
  font-weight: 400;
  font-size: 75.3104px;
  line-height: 87px;
  /* identical to box height */
  color: #000000;
`;

export const Par = styled.p`
  position: relative;
  /* width: 827.18px;
  height: 64px;
  left: 546.41px; */
  /* top: 347.93px; */

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24.3028px;
  line-height: 32px;
  /* or 131% */

  /* display: flex; */
  align-items: center;
  text-align: center;
  letter-spacing: 0.303785px;
  color: #000000;
  opacity: 0.2;
`;

export const Trio=styled.div`
position:relative;
display:flex;
justify-content: space-around;
/* width: 1536.53px;
height: 131.92px; */
/* left: 191.74px; */
/* top: 558.6px; */

`



export const Circle=styled.div`
  position: relative;
  height:128.3px;
  width:128.3px;
  background-color: #0038FE;
  bottom: -65px;
  left: 129.42px;
border-radius: 50%;
`

export const Card=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 387.02px;
    height: 373.33px;
    border: 3.48px solid #0038FE;
    border-radius: 26.08px;

`

export const Label=styled.div`
    display: flex;
    font-family: 'Roboto';
    font-style: normal;
    align-items: center;
    font-weight: 400;
    font-size: 20.61px;
    line-height: 24.16px;
    letter-spacing: 0.133273px;
    color: #0038FE;
    opacity: .5;
    margin-left: 41.02px;
`

export const Value=styled.div`
 display: flex;
    font-family: 'Roboto';
    font-style: normal;
    align-items: center;
    font-weight: 600;
    font-size: 28.9545px;
    line-height: 33.93px;
    letter-spacing: 0.187208px;
    margin-left: 41.02px;
    color: #0038FE;
`

export const CountryCard=styled.section`
display: grid;
`

export const NavWrapper=styled.section`
margin-left: auto;
margin-right: auto;
margin-top: 66.29px;
margin-bottom: 107.42px;
display: flex;
flex-direction: row;
justify-content: space-between;
width:563.8px;
`

export const Button=styled.button`
font-family: 'Oranienbaum';
font-style: normal;
font-weight: 400;
font-size: 30.6068px;
line-height: 35px;
color: black;
width: 160.22px;
height: 61.58px;
left: 678.1px;
top: 69.29px;
background: white;
border:none;

:focus{
  background-color: #000000;
  color: #FFFFFF;
  border-radius: 14px;

}
`