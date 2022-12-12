import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";


// const store = configureStore(formSlice);

const store = configureStore({
    reducer:{formReducer}
});






export type RootState = ReturnType<typeof store.getState>;

export default store;
