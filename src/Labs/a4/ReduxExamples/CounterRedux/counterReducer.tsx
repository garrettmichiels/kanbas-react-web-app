import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    count: 0,
  };
  
const counterSlice = createSlice ({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state, { payload }) => { 
            state.count -= payload;
        },
        reset: (state, { payload }) => {
            state.count = payload;
        }
    }
})
export default counterSlice.reducer;
export const {increment, decrement, reset} = counterSlice.actions;