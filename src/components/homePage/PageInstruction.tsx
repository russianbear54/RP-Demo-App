import { Reorder } from "framer-motion";
import React from "react";
import {  Heading, Instructions, InstructionsWrapper } from "./styles";

type Props = {
  text: string;
  heading: string;
};

const PageInstruction:React.FC = ({ heading, text }: Props) => {


  return (
    <Reorder.Item value={heading}  >
    <InstructionsWrapper>
      <Heading>{heading}</Heading>
      <Instructions>      
        {text}
      </Instructions>
    </InstructionsWrapper>
    </Reorder.Item>
  );
};

export default PageInstruction;
