//import createslice 
import { createSlice } from "@reduxjs/toolkit";  


//initial  state of variable is given here it is dark variable is mode and state is set to dark

 const initialState={
    mode: "dark",
    userId:"63701cc1f03239c72c00017f",
 };

 export const globalSlice = createSlice(
    {
        name: "global",
        initialState,
        reducers:{
            setMode:(state)=>{ 
                state.mode = state.mode === 'light' ? 'dark' : 'light';   
            }
        }
    }
 );
//create actions for all reducers
 export const {setMode} = globalSlice.actions;

 export default globalSlice.reducer;

