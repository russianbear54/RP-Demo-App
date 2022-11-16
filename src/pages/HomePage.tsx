import React from "react";
import IconsLine from "../components/homePage/IconsLine";
import PageInstruction from "../components/homePage/PageInstruction";
import { Wrapper, Par, Trio } from "../styles/HomePage/styles";
import { Title } from "../styles/stylesSC";
import { instructions } from "../Dummies/homePageInstructions";

function HomePage() {
  return (
    <Wrapper>
      <Title>Home Page</Title>
      <Par>This is the Home Page, the app should include simple pages as the following</Par>
      <Trio>
        {instructions.map((instruction, key) => (
          <PageInstruction {...instruction} key={key} />
        ))}
      </Trio>
      <IconsLine />
    </Wrapper>
  );
}

export default HomePage;
