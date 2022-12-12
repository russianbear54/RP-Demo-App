import CardComponent from "../components/form/CardComponent";
import FormComponent from "../components/form/FormComponent";
import { FormPageWrapper, Split } from "../styles/FormPage/styles";
import {  motion } from "framer-motion";

const FormPage: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <FormPageWrapper>
        <FormComponent />
        <Split />
        <CardComponent />
      </FormPageWrapper>
    </motion.div>
  );
};

export default FormPage;
