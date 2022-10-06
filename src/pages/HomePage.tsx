import React from "react";
import IconsLine from "../components/IconsLine";
import PageInstruction from "../components/PageInstruction";
import {Wrapper,Par,Trio,Title} from '../styles/stylesSC'






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
