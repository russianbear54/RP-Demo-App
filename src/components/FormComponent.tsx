import React from "react";

import FormPageTitles from "./FormPageTitles";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";

import { Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import * as styles from "../styles/stylesMUI";
import { useDispatch } from "react-redux";
import { enterFields } from "../state/formSlice";
import { FormContainer, FormFieldsDiv} from "../styles/FormPage/styles";

const FormComponent: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <FormFieldsDiv>
        <FormPageTitles title={"Form Fields"} />
      </FormFieldsDiv>

      <Formik
        initialValues={{ firstName: "", lastName: "", age: "", department: "" }}
        onSubmit={(values) => {
          dispatch(enterFields(values));
        }}>
        {(props) => (
          <Form>
            <Container sx={styles.formStyle}>
              <TextField
                sx={styles.TextFieldStyle}
                id="firstName"
                name="firstName"
                label="First Name"
                type="text"
                variant="standard"
                value={props.values.firstName}
                onChange={props.handleChange}
              />
              <TextField
                sx={styles.TextFieldStyle}
                id="lastName"
                name="lastName"
                label="Last Name"
                type="text"
                variant="standard"
                value={props.values.lastName}
                onChange={props.handleChange}
              />
              <TextField
                sx={styles.TextFieldStyle}
                id="age"
                name="age"
                label="age"
                type="number"
                variant="standard"
                value={props.values.age}
                onChange={props.handleChange}
              />
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
              <button type="submit">Submit</button>
            </Container>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default FormComponent;

//   <Container sx={styles.formStyle}></Container>
