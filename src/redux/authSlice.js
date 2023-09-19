import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        userData : null
    },
    reducers:{
        authenticate : (state,action) => {
            state.userData = action.payload.userData
        },
        logout : (state,action) => {
            state.userData = null
        }
    }
});

export const authReducer = authSlice.reducer;
export const {authenticate,logout} = authSlice.actions;