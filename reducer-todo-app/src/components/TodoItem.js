import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";
import "../App.css";

function TodoItem({ item }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isCompleted, setIsCompleted] = useState(item.completed);

  return (
    <div>
      <h3
        className={isCompleted === true ? "completed" : null}
        onClick={() => {
          dispatch({ type: "TOGGLE_COMPLETED", payload: isCompleted });
          setIsCompleted(!isCompleted);
        }}
      >
        {item.item}
      </h3>
    </div>
  );
}

export default TodoItem;
