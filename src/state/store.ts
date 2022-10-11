import { configureStore } from "@reduxjs/toolkit";
import {formSlice} from '../state/formSlice'





const store=configureStore(formSlice)


export type RootState = ReturnType<typeof store.getState>;

export default store;