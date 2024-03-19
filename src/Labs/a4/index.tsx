import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import CounterRedux from "./ReduxExamples/CounterRedux";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import store from "./store";
import { Provider } from "react-redux";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }
    
  return(
    <>
      <Provider store={store}>
      <h1>Assignment 4</h1>
      <ReduxExamples/>

      <ParentStateComponent />
      <ArrayStateVariable />
      <ObjectStateVariable />
      <DateStateVariable />
      <StringStateVariables />
      <BooleanStateVariables />
      <Counter />
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      </Provider>
    </>
  );
};
export default Assignment4;