import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

type FormState= {
  firstName: string;
  lastName: string;
  age: string;
  department: string;
}

const subs:object[]=[]

export const formSlice = createSlice({
  name: "form",
  initialState: {} as FormState,
  reducers: {
    enterFields: (state, action: PayloadAction<FormState>) => {
      subs.push(action.payload)
console.log('subs',subs);

      return (state = action.payload);
    },
  },
});

console.log('formSlice',formSlice);



export const selectForm = (state: RootState) => state;

export const { enterFields } = formSlice.actions;
