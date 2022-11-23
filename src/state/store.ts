import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "../state/formSlice";


const store = configureStore(formSlice);



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export default store;
