import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./a4/CounterRedux/counterReducer";

const store = configureStore({
    reducer: {
        counter: counterReducer
    },
});

export default store;