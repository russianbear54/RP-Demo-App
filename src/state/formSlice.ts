import { createSlice,PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

 interface FormState{
    firstName:string,
    lastName:string,
    age:number,
    department:string
}






export const formSlice=createSlice({
    name:'form',
    initialState:{} as FormState,
    reducers:{
        enterFields:(state,action:PayloadAction<object>)=>{
      
        }
     
    
    }

})

export const selectForm=(state:RootState)=>state

// export const {enterFN,enterLN,enterAge,enterPosition}=formSlice.actions
export const {enterFields}=formSlice.actions




   // enterFN:(state,action:PayloadAction<string>)=>{
        //     state.firstName=action.payload

        // },
        // enterLN:(state,action:PayloadAction<string>)=>{
        //     state.lastName=action.payload
        // },
        // enterAge:(state,action:PayloadAction<string>)=>{
        //     state.age=action.payload
        // },
        // enterPosition:(state,action:PayloadAction<string>)=>{
        //     state.department=action.payload
        // },  

        // const initialState:FormState={
//     firstName:'',
//     lastName:'',
//     age:'',
//    department:''
//   }