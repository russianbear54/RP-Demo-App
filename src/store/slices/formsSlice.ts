import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dummyState } from "../../helpers/dummyState";

import { RootState } from "../store";

interface FormInputs {
  firstName: string;
  lastName: string;
  age: number;
  department: string;
}

export const formsSlice = createSlice({
  name: "forms",
  initialState: dummyState as FormInputs[],
  reducers: {
    enterFields: (state, action: PayloadAction<FormInputs>) => {
      state.push(action.payload);
    },
  },
});

export const selectForms = (state: RootState) => state.forms;

export const formsReducer = formsSlice.reducer;

export const { enterFields } = formsSlice.actions;
