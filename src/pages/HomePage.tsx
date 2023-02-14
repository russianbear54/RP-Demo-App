import React, {  useState } from "react";
import IconsLine from "../components/homePage/IconsLine";
import PageInstruction from "../components/homePage/PageInstruction";
import { Wrapper, Par, Trio } from "../components/homePage/styles";
import { Title } from "../styles/stylesSC";
import { instructions } from "../Dummies/homePageInstructions";
import { Reorder } from "framer-motion";

interface Props {
  pageRef: any;
}

const HomePage: React.FC<Props> = ({ pageRef }) => {
  const [items, setItems] = useState(instructions);
 

  return (
    
    <Wrapper >
      <Title>Home Page</Title>
      <Par>This is the Home Page, the app should include simple pages as the following</Par>
      <Reorder.Group axis="x" onReorder={setItems} values={items}>
        <Trio>
          {items.map((item) => (
            <PageInstruction {...item} key={item.id} />
          ))}
        </Trio>
      </Reorder.Group>
      <IconsLine pageRef={pageRef} />
    </Wrapper>
  );
};

export default HomePage;
