import { configureStore } from "@reduxjs/toolkit";
import { userSlice} from "./slices/Auth";
import { userApi } from "./slices/AuthApi";

const store = configureStore({
    reducer:{
        User:userSlice.reducer,
        [userApi.reducerPath]:userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

export default store;