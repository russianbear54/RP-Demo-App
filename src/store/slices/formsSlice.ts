import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {dummyState} from '../../helpers/dummyState'

import { RootState } from "../store";

interface FormInputs {
  firstName: string;
  lastName: string;
  age: number;
  department: string;
}



console.log("dummyState", dummyState);



export const formsSlice = createSlice({
  name: "forms",
  initialState: dummyState as unknown as FormInputs[],
  reducers: {
    enterFields: (state, action: PayloadAction<FormInputs>) => {
      state.push(action.payload);
    },
  },
});

export const selectForm = (state: RootState) => state;
export const selectForms = (state: RootState) => state.formsReducer;

export const formsReducer = formsSlice.reducer;

export const { enterFields } = formsSlice.actions;
