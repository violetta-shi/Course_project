import { configureStore } from '@reduxjs/toolkit'
import usersReducer from "./userSlice";
import authReducer from "./authSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        auth: authReducer,
    },
});
