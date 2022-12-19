import FormPageTitles from "./FormPageTitles";
import { Form, Formik } from "formik";
import { Button, Container, FormControl, Input, InputLabel, MenuItem, Select } from "@mui/material";
import * as styles from "../../styles/stylesMUI";
import { enterFields } from "../../store/slices/formsSlice";
import { FPContainer } from "../../styles/FormPage/styles";
import { enterFirstName, enterLastName, setDepartment, enterAge } from "../../store/slices/formSlice";
import { useAppDispatch } from "../../store/hooks";

const FormComponent: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <FPContainer>
      <FormPageTitles title={"Form Fields"} />
      <Formik
        initialValues={{ firstName: "", lastName: "", age: undefined, department: "" }}
        onSubmit={(values, { resetForm }) => {     
          dispatch(enterFirstName(values.firstName));
          dispatch(enterLastName(values.lastName));
          dispatch(enterAge(values.age));
          dispatch(setDepartment(values.department));
          dispatch(enterFields(values));
          resetForm({});
        }}>
        {(props) => (
          <Form>
            <Container sx={styles.formStyle}>
              <Input placeholder="First Name" id="firstName" name="firstName" type="text" onChange={props.handleChange} />
              <Input placeholder="Last Name" id="lastName" name="lastName" type="text" onChange={props.handleChange} />
              <Input id="age" name="age" placeholder="age" type="number" onChange={props.handleChange} />
              <FormControl>
                <InputLabel id="department-label">Department</InputLabel>
                <Select
                  labelId="department-label"
                  variant="standard"
                  id="dept"
                  name="department"
                  value={props.values.department}
                  onChange={props.handleChange}>
                  <MenuItem id="frontEnd" value={"Frontend Developer"}>
                    Frontend Developer
                  </MenuItem>
                  <MenuItem id="backEnd" value={"Backend Developer"}>
                    Backend Developer
                  </MenuItem>
                  <MenuItem id="fullStack" value={"Fullstack Developer"}>
                    Fullstack Developer
                  </MenuItem>
                  <MenuItem id="QA" value={"Quality Control"}>
                    Quality Control
                  </MenuItem>
                  <MenuItem id="security" value={"Security"}>
                    Security
                  </MenuItem>
                </Select>
              </FormControl>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Container>
          </Form>
        )}
      </Formik>
    </FPContainer>
  );
};

export default FormComponent;
