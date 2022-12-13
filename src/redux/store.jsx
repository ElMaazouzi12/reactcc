import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import UserSlice from "./UserSlice";


export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        todo: TodoSlice.reducer
    }
})

export default store;