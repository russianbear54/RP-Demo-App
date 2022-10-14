import React from "react";

import FormPageTitles from "./FormPageTitles";
import TextField from "@mui/material/TextField";
import {  Form, Formik,  } from "formik";
import Container from "@mui/material/Container";
import { InputLabel, MenuItem, Select } from "@mui/material";
import * as styles from "../styles/stylesMUI";
import { useDispatch } from "react-redux";
import { enterFields } from "../state/formSlice";

const FormComponent: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <FormPageTitles title={"Form Fields"} />

      <Formik
        initialValues={{ firstName: "", lastName: "", age: "", department: "" }}
        onSubmit={(values) => {console.log('vals',values,typeof values);
          dispatch(enterFields(values));
        }}>
        {(props) => (
          <Form>
            <Container sx={styles.formStyle}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                type="text"
                variant="standard"
                value={props.values.firstName}
                onChange={props.handleChange}
              />
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                type="text"
                variant="standard"
                value={props.values.lastName}
                onChange={props.handleChange}
              />
              <TextField
                fullWidth
                id="age"
                name="age"
                label="age"
                type="number"
                variant="standard"
                value={props.values.age}
                onChange={props.handleChange}
              />

              <InputLabel variant="outlined">Department</InputLabel>
              <Select fullWidth variant="standard" name="department" value={props.values.department} onChange={props.handleChange}>
                <MenuItem id="frontEnd" value={"frontEnd"}>
                  Frontend Developer
                </MenuItem>
                <MenuItem id="backEnd" value={"backEnd"}>
                  Backend Developer
                </MenuItem>
                <MenuItem id="fullStack" value={"fullStack"}>
                  Fullstack Developer
                </MenuItem>
                <MenuItem id="QA" value={"QA"}>
                  Quality Control
                </MenuItem>
                <MenuItem id="security" value={"security"}>
                  Security
                </MenuItem>
              </Select>

              <button type="submit">Submit</button>
            </Container>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
