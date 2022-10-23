import React from "react";
import { useSelector } from "react-redux";
import { selectForm } from "../state/formSlice";
import { Circle, Card, Label, Value, CardComponentDiv, CardCircleDiv, ShowCardDiv } from "../styles/FormPage/styles";
import FormPageTitles from "./FormPageTitles";

const CardComponent: React.FC = () => {
  const value = useSelector(selectForm);
  console.log("value",value);

  return (
    <CardComponentDiv>
      <ShowCardDiv>
        <FormPageTitles title={"Show Card"} />
      </ShowCardDiv>

      <>
        <Circle />
        <Card>
          <Label>Name</Label>
          <Value>
            {value.firstName} {value.lastName}
          </Value>
          <Label>Age</Label>
          <Value>{value.age}</Value>
          <Label>Department</Label>
          <Value>{value.department}</Value>
        </Card>
      </>
    </CardComponentDiv>
  );
};

export default CardComponent;
