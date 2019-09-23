import React, { useState, useReducer } from "react";

function TodoItem({ item }) {
  return (
    <div>
      <h3>{item.item}</h3>
    </div>
  );
}

export default TodoItem;
