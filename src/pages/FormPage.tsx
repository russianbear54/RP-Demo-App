import CardComponent from "../components/CardComponent";
import FormComponent from "../components/FormComponent";
import {  FormPageWrapper, Split } from "../styles/FormPage/styles";


const FormPage = () => {
  return (
    <FormPageWrapper>
      <FormComponent />
      <Split/>
      <CardComponent />
    </FormPageWrapper>
  );
};

export default FormPage;


