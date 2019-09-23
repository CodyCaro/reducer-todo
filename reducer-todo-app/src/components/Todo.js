import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";
import TodoItem from "./TodoItem";

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const stateArray = [state];

  return (
    <div>
      {stateArray.map(item => {
        return <TodoItem item={item} />;
      })}
    </div>
  );
}

export default Todo;
