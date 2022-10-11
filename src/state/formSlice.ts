import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface FormState{
    firstName:string,
    lastName:string,
    age:string,
    department:string
}

const initialState:FormState={
    firstName:'',
    lastName:'',
    age:'',
   department:'shit'
  }




export const formSlice=createSlice({
    name:'form',
    initialState,
    reducers:{
        enterFN:(state,action:PayloadAction<string>)=>{
            state.firstName=action.payload

        },
        enterLN:(state,action:PayloadAction<string>)=>{
            state.lastName=action.payload
        },
        enterAge:(state,action:PayloadAction<string>)=>{
            state.age=action.payload
        },
        enterPosition:(state,action:PayloadAction<string>)=>{
            state.department=action.payload
        },  
    
    }

})

export const selectForm=(state:RootState)=>state

export const {enterFN,enterLN,enterAge,enterPosition}=formSlice.actions


