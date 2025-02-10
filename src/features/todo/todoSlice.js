import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => { // First reducer
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };

      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => { // Section reducer
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    marksAsDone: (state, action) => { // Thired reducer
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, marksAsDone } = todoSlice.actions;
export default todoSlice.reducer;