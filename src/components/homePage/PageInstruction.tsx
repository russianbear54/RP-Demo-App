import React from "react";
import {  Heading, Instructions, InstructionsWrapper } from "./styles";

type Props = {
  text: string;
  heading: string;
};

const PageInstruction = ({ heading, text }: Props) => {
  return (
    <InstructionsWrapper>
      <Heading>{heading}</Heading>
      <Instructions>      
        {text}
      </Instructions>
    </InstructionsWrapper>
  );
};

export default PageInstruction;
