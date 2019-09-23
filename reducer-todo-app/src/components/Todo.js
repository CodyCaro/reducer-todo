import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";
import TodoItem from "./TodoItem";

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodoItem, setNewTodoItem] = useState();

  const handleChanges = e => {
    setNewTodoItem(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="todoItems"
        value={newTodoItem}
        onChange={handleChanges}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: newTodoItem });
        }}
      >
        Add New Item
      </button>
      {state.map(item => {
        return <TodoItem item={item} />;
      })}
    </div>
  );
}

export default Todo;
