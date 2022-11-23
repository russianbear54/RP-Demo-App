import React from "react";
import { useSelector } from "react-redux";
import { selectForm } from "../../state/formSlice";
import { Circle, Card, Label, Value,  TextDiv, Pair, FPContainer, CardDiv,  } from "../../styles/FormPage/styles";
import FormPageTitles from "./FormPageTitles";

const CardComponent: React.FC = () => {
  const value = useSelector(selectForm);




  return (
    <FPContainer>
      <FormPageTitles title={"Show Card"} />
      <CardDiv>
        <Circle />
        <Card>
          <TextDiv>
            <Pair>
              <Label>Name</Label>
              <Value>
                {value.firstName} {value.lastName}
              </Value>
            </Pair>
            <Pair>
              <Label>Age</Label>
              <Value>{value.age}</Value>
            </Pair>
            <Pair>
              <Label>Department</Label>
              <Value>{value.department}</Value>
            </Pair>
          </TextDiv>
        </Card>
      </CardDiv>
    </FPContainer>
  );
};

export default CardComponent;
