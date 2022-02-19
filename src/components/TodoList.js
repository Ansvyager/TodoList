import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { getTodosAsync } from "../redux/todoSlice";


const TodoList = () => {


  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </ul>
  );
};

export default TodoList;
