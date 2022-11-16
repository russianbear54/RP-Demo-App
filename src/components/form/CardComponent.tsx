import React from "react";
import { useSelector } from "react-redux";
import { selectForm } from "../../state/formSlice";
import { Circle, Card, Label, Value, CardComponentContainer, TextDiv, Pair,  } from "../../styles/FormPage/styles";
import FormPageTitles from "./FormPageTitles";

const CardComponent: React.FC = () => {
  const value = useSelector(selectForm);

  return (
    <CardComponentContainer>
      <FormPageTitles title={"Show Card"} />
      <div>
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
      </div>
    </CardComponentContainer>
  );
};

export default CardComponent;
