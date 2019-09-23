import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";

function TodoForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <div></div>;
}

export default TodoForm;
