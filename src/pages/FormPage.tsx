import CardComponent from "../components/form/CardComponent";
import FormComponent from "../components/form/FormComponent";
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


