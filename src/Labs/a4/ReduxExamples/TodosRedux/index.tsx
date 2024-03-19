import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

function TodosRedux() {
    // const { todos } = useSelector((store: any) => store.todos);
    // const dispatch = useDispatch();
    // const [todo, setTodo] = useState({text: "New Todo", }); //For making name, if it is something local, go with useState, if it is global go with redux
    return (
      <div>
        <h1>TodosRedux</h1>
        {/* <ul>
          {todos.map((todo: any, index: any) => (
            <li key={index}>{todo}</li>
          ))}
        </ul> */}
        </div>
        
    );
}
export default TodosRedux;