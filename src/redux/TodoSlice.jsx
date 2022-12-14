import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodo = createAsyncThunk("todo/getTodo", async () => {
  const response = await axios.get("https://dummyjson.com/todos");
  return response.data;
});

export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodo.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getTodo.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
            state.data = action.payload
            state.loading = 'idle'
        }
    });
  },
});


export const todoActions = TodoSlice.actions;

export default TodoSlice;