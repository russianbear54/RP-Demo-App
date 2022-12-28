import FormPageTitles from "./FormPageTitles";
import { Field, Form, Formik } from "formik";
import { Button, Container, FormControl, Input, InputLabel, MenuItem, Select } from "@mui/material";
import * as styles from "../../styles/stylesMUI";
import { enterFields } from "../../store/slices/formsSlice";
import { FPContainer } from "./styles";
import { enterFirstName, enterLastName, setDepartment, enterAge } from "../../store/slices/formSlice";
import { useAppDispatch } from "../../store/hooks";

const initialValues = { firstName: "", lastName: "", age: undefined as number, department: "" };

const positionSelector = ({ children, form, field }) => {


  const { name, value } = field;
  const { setFieldValue } = form;

  return (
    <Select
      variant="standard"
      name={name}
      value={value}
      onChange={(e) => {
        setFieldValue(name, e.target.value);
      }}>
      {children}
    </Select>
  );
};

const FormComponent: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <FPContainer>
      <FormPageTitles title={"Form Fields"} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          dispatch(enterFields(values));
          resetForm({});
        }}>
        {({ values }) => {
          dispatch(enterFirstName(values.firstName));
          dispatch(enterLastName(values.lastName));
          dispatch(enterAge(values.age));
          dispatch(setDepartment(values.department));

          return (
            <Form>
              <Container sx={styles.formStyle}>
                <Field as={Input} type="text" name="firstName" placeholder="First Name" />
                <Field as={Input} type="text" name="lastName" placeholder="Last Name" />
                <Field as={Input} type="number" name="age" placeholder="Age" />
                <FormControl>
                  <InputLabel id="department-label">Department</InputLabel>
                  <Field name="department" component={positionSelector}>
                    <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
                    <MenuItem value="Backend Developer">Backend Developer</MenuItem>
                    <MenuItem value="Fullstack Developer">Fullstack Developer</MenuItem>
                    <MenuItem value="Quality Control">Quality Control</MenuItem>
                    <MenuItem value="Security">Security</MenuItem>
                  </Field>
                </FormControl>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Container>
            </Form>
          );
        }}
      </Formik>
    </FPContainer>
  );
};

export default FormComponent;
