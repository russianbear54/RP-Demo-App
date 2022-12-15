import { configureStore } from "@reduxjs/toolkit";
import { formsReducer } from "./slices/formsSlice";


const store = configureStore({
    reducer:{formsReducer}
});






export type RootState = ReturnType<typeof store.getState>;

export default store;
