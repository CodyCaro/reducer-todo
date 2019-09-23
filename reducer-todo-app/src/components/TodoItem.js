import React, { useState } from "react";
import "../App.css";

function TodoItem({ item, state, dispatch }) {
  const [isCompleted, setIsCompleted] = useState(item.completed);
  return (
    <div>
      <h3
        className={isCompleted === true ? "completed" : null}
        onClick={() => {
          setIsCompleted(!isCompleted);
          dispatch({ type: "TOGGLE_COMPLETED", payload: item.id });
        }}
      >
        {item.item}
      </h3>
    </div>
  );
}

export default TodoItem;
