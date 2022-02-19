import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";
const TodoItem = ({ id, title, status, description }) => {
  
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(toggleComplete({ id: id, status: !status }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
      <li
        className={`list-group-item ${status && "list-group-item-success"}`}>
        <div className="d-flex justify-content-between">
          <span className="d-flex align-items-center">
            <input
              type="checkbox"
              className="mr-3"
              checked={status}
              onChange={handleComplete}
            />
            <div className="text d-flex flex-column">
              <div className="title">{title}</div>
              <div className="desc">{description}</div>
            </div>
          </span>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </li>
  );
};

export default TodoItem;
