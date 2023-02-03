import CardComponent from "../components/form/CardComponent";
import FormComponent from "../components/form/FormComponent";
import { FormPageWrapper, Split } from "../components/form/styles";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
  exit: { opacity: 0 },
};

const FormPage: React.FC = () => {
  return (
    <FormPageWrapper as={motion.div} variants={fadeIn} initial="hidden" animate="visible" exit="exit">
      <FormComponent />
      <Split />
      <CardComponent />
    </FormPageWrapper>
  );
};

export default FormPage;
