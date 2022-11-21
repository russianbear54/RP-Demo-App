import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

type FormState= {
  firstName: string;
  lastName: string;
  age: string;
  department: string;
}

export const formSlice = createSlice({
  name: "form",
  initialState: {} as FormState,
  reducers: {
    enterFields: (state, action: PayloadAction<FormState>) => {
      return (state = action.payload);
    },
  },
});

console.log('formSlice',formSlice);

export const selectForm = (state: RootState) => state;

export const { enterFields } = formSlice.actions;
