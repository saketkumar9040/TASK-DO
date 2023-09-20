import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name:"task",
    initialState:{
        taskList : []
    },
    reducers:{
        addTask : (state,action) => {
            const newTask =  action.payload.addTask;
            const existingTask = state.taskList;
            existingTask.push(newTask);
            state.taskList=existingTask
        }
    }
});

export const taskReducer = taskSlice.reducer;
export const {addTask} = taskSlice.actions;