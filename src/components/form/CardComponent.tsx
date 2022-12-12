
import { useSelector } from "react-redux";
import { selectForm } from "../../store/slices/formSlice";
import { Circle, Card, Label, Value, TextDiv, Pair, FPContainer, CardDiv } from "../../styles/FormPage/styles";

import ApplicantsComponent from "./ApplicantsComponent";

import FormPageTitles from "./FormPageTitles";

const CardComponent: React.FC = () => {
  const value = useSelector(selectForm);

  const properValue = value.formReducer[value.formReducer.length - 1];

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
                {properValue.firstName} {properValue.lastName}
              </Value>
            </Pair>
            <Pair>
              <Label>Age</Label>
              <Value>{properValue.age}</Value>
            </Pair>
            <Pair>
              <Label>Department</Label>
              <Value>{properValue.department}</Value>
            </Pair>
          </TextDiv>
        </Card>
      </CardDiv>
      {value.formReducer.length > 1 && <ApplicantsComponent />}
    </FPContainer>
  );
};

export default CardComponent;
