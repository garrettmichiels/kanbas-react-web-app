import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/moduleReducer";

export type lessonType = {
    _id: string;
    name: string;
    description: string;
    module: string;
}

export type modulesType = {
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons: lessonType[];
}

export interface KanbasState {
  modulesReducer: {
    modules: modulesType[];
    module: modulesType;
  };
}


const store = configureStore({
  reducer: {
    modulesReducer
  }
});


export default store;