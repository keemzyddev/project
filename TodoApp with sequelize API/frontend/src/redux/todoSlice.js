import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000/todo/";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const res = await axios.get(baseUrl);

  return res.data;
});

export const createTodo = createAsyncThunk(
  "todos/creteTodo",
  async (newTodo) => {
    const res = await axios.post(baseUrl, newTodo);
    return res.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, reminder }) => {
    console.log("log" + id, reminder + "hello");
    const res = await axios.patch(baseUrl + `${id}`, { reminder: !reminder });
    return res.data;
  }
);
export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios.delete(baseUrl + `${id}`);

  return id;
});

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
    isSuccess: false,
    loading: false,
    error: null,
  },
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.loading = true;
    },
    [getTodos.fulfilled]: (state, action) => {
      state.loading = false;
      state.todoList = action.payload;
      state.isSuccess = true;
    },
    [getTodos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [createTodo.pending]: (state) => {
      state.loading = true;
    },
    [createTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todoList = [...state.todoList, action.payload];
      state.isSuccess = true;
    },
    [createTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateTodo.pending]: (state) => {
      state.loading = true;
    },
    [updateTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todoList = state.todoList.map((todo) =>
        todo.userId === action.payload.userId
          ? { ...todo, reminder: action.payload.reminder }
          : todo
      );
      state.isSuccess = true;
    },
    [updateTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteTodo.pending]: (state) => {
      state.loading = true;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todoList = state.todoList.filter(
        (todo) => todo.userId !== action.payload
      );
      state.isSuccess = true;
    },
    [deleteTodo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default todosSlice.reducer;
