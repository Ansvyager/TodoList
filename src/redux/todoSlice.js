import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const response = await fetch(
      "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"
    );
    if (response.ok) {
      const todos = await response.json();
      return { todos };
    }
  }
);
// export const addTodoAsync = createAsyncThunk(
//   "todos/addTodosAsync",
//   async (payload) => {
//     const response = await fetch(
//       "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "appliaction/json",
//         },
//         body: JSON.stringify({
//           title: payload.title,
//           description: payload.description,
//         }),
//       }
//     );
//     if (response.ok) {
//       const todo = await response.json();
//       return { todo };
//     }
//   }
// );
export const toggleCompleteAsync = createAsyncThunk('todos/complete')
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        status: true,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].status = action.payload.status;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getTodosAsync.pending]: (state, action) => {
      console.log("fetching data...");
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
    // [addTodoAsync.fulfilled]: (state, action) => {
    //   state.push(action.payload.todo);
    // },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
