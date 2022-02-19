import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("user entered: " + title);
    dispatch(
      addTodo({
        title: title,
		desc:desc,
      })
    );
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
          <label className="sr-only">Name</label>
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Add todo..."
            value={title}
            onChange={(title) => setTitle(title.target.value)}
			id="title"
          />
          <input
            className="form-control mb-2 mr-sm-2"
            type="text"
            id="desc"
            placeholder="Description"
			onChange={(desc)=> setDesc(desc.target.value)}
          />
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTodoForm;
