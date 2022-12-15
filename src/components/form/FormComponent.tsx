import React from "react";
import FormPageTitles from "./FormPageTitles";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import { Button, Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import * as styles from "../../styles/stylesMUI";
import { useDispatch } from "react-redux";
import { enterFields } from "../../store/slices/formsSlice";

import { FPContainer } from "../../styles/FormPage/styles";

const FormComponent: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <FPContainer>
      <FormPageTitles title={"Form Fields"} />
      <Formik
        initialValues={{ firstName: "", lastName: "", age: undefined, department: "" }}
        onSubmit={(values, { resetForm }) => {
          dispatch(enterFields(values));
          resetForm({});
        }}>
        {(props) => (
          <Form>
            <Container sx={styles.formStyle}>
              <TextField
                sx={styles.textFieldStyle}
                id="firstName"
                name="firstName"
                label="First Name"
                type="text"
                variant="standard"
                value={props.values.firstName}
                onChange={props.handleChange}
              />
              <TextField
                sx={styles.textFieldStyle}
                id="lastName"
                name="lastName"
                label="Last Name"
                type="text"
                variant="standard"
                value={props.values.lastName}
                onChange={props.handleChange}
              />
              <TextField
                sx={styles.textFieldStyle}
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
