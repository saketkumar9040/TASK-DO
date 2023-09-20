import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name:"task",
    initialState:{
        taskList : {}
    },
    reducers:{
        addTask : (state,action) => {
            state.taskList =  action.payload.taskList;
        }
    }
});

export const taskReducer = taskSlice.reducer;
export const {addTask} = taskSlice.actions;