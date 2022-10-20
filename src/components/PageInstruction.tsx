import React from "react";
import { BlueBar, Heading, Instructions, InstructionsWrapper } from "../styles/HomePage/styles";

type Props = {
  text: string;
  heading: string;
};

const PageInstruction = ({ heading, text }: Props) => {
  return (
   
    <InstructionsWrapper>
      <Heading>{heading}</Heading>
      <Instructions>
        <BlueBar />
        {text}
      </Instructions>
    </InstructionsWrapper>
  );
};

export default PageInstruction;
