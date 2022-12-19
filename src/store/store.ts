import { configureStore } from "@reduxjs/toolkit";
import { formsReducer } from "./slices/formsSlice";
import { formReduceR } from "./slices/formSlice";

const store = configureStore({
  reducer: { forms: formsReducer, form: formReduceR },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
