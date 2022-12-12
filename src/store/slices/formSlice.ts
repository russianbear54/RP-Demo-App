import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

interface FormInputs {
  firstName: string;
  lastName: string;
  age: number;
  department: string;
}

export const formSlice = createSlice({
  name: "form",
  initialState: [{}] as FormInputs[],
  reducers: {
    enterFields: (state, action: PayloadAction<FormInputs>) => {
      state.push(action.payload);
      
    },
  },
});



export const selectForm = (state: RootState) => state;
export const selectForms = (state: RootState) => state.formReducer;

export const formReducer = formSlice.reducer;

export const { enterFields } = formSlice.actions;
