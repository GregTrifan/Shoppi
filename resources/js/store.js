import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./storage/user";

export default configureStore({
    reducer: {
        user:userReducer,
    },
});