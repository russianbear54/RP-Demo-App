import React from "react";
import styled from "styled-components";
import IconsLine from "../components/IconsLine";
import PageInstruction from "../components/PageInstruction";


const Wrapper=styled.div`
/* position: relative; */
  display: flex;
  flex-direction: column; 
  justify-content: space-around;
  
  height: 1020px;
`

const Title = styled.h1`
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

const Par = styled.p`
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

const Trio=styled.div`
position:relative;
display:flex;
justify-content: space-around;
/* width: 1536.53px;
height: 131.92px; */
/* left: 191.74px; */
/* top: 558.6px; */

`




function HomePage() {
  return (
    <Wrapper>
      <Title>Home Page</Title>
      <Par>This is the Home Page, the app should include simple pages as the following</Par>
      <Trio>
        <PageInstruction heading={'1. Home Page'} text={'use react, typescript and styled-components to create the home page - should be identical to that page (like a mirror)'} />
        <PageInstruction heading={'2. Form Page'} text={'use react, typescript, formik, react-redux, mui, and styled-components to create the form page'} />
        <PageInstruction heading={'3. List Page'} text={'use react, typescript, apollo-client, and styled-components to create the countries list page'} />
      </Trio>
      <IconsLine/>
    </Wrapper>
  );
}

export default HomePage;
