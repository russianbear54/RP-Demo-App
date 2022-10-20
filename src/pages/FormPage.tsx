import { Container } from "@mui/material";
import CardComponent from "../components/CardComponent";
import FormComponent from "../components/FormComponent";
import { FormPageDiv, Split } from "../styles/FormPage/styles";
//import FCompLessFormk from '../components/FCompLessFormk'

const FormPage = () => {
  return (
    <>
      <FormComponent />
      <Split/>
      <CardComponent />
    </>
  );
};

export default FormPage;


//gap:'297.11px',