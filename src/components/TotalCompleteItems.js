import React from "react";
import { useSelector } from "react-redux";
const TotalCompleteItems = () => {
  const statusTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.status === true)
  );

  return <h4 className="mt-3">Total Complete Items: {statusTodos.length}</h4>;
};

export default TotalCompleteItems;
