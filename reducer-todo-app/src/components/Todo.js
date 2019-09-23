import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";
import TodoItem from "./TodoItem";

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoItems, setTodoItems] = useState(state);
  const [newTodoItem, setNewTodoItem] = useState();

  const handleChanges = e => {
    setTodoItems(e.target.value);
    setNewTodoItem(e.target.value);
  };

  console.log(state);

  return (
    <div>
      <input
        // className="todo-input"
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
        console.log(item);
        return <TodoItem item={item} />;
      })}
    </div>
  );
}

export default Todo;
