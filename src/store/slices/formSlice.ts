import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface FormInputs {
  firstName: string;
  lastName: string;
  age: any;
  department: string;
}

export const formSlicE = createSlice({
  name: "form",
  initialState: { firstName: "", lastName: "", age: undefined, department: "" } as FormInputs,
  reducers: {
    enterFirstName(state, action) {
      state.firstName = action.payload;
    },
    enterLastName(state, action) {
      state.lastName = action.payload;
    },
    enterAge(state, action) {
      state.age = action.payload;
    },
    setDepartment(state, action) {
      state.department = action.payload;
    },
  },
});

export const { enterFirstName, enterLastName, enterAge, setDepartment } = formSlicE.actions;

export const selectForM = (state: RootState) => state.form;

export const formReduceR = formSlicE.reducer;
