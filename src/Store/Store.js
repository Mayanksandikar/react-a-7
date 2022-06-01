import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./StudentData";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
})
