import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { name: "Rushi", age: 24, course: "html", batch: "October", id: "1" },
  { name: "Shashank", age: 25, course: "css", batch: "November", id: "2" },
  { name: "rohit", age: 26, course: "js", batch: "September", id: "3" },
  { name: "dinesh", age: 22, course: "react", batch: "September", id: "4" },
  { name: "atharv", age: 23, course: "node", batch: "October", id: "5" },
  { name: "deepti", age: 24, course: "mogodb", batch: "November", id: "6" },
]

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded(state, action) {
      state.push(action.payload)
    },
    userUpdated(state, action) {
      const { id, name, age, course, batch } = action.payload
      const existingUser = state.find((user) => user.id === id)
      if (existingUser) {
        existingUser.name = name
        existingUser.age = age
        existingUser.course = course
        existingUser.batch = batch
      }
    },
  },
})

export const { userAdded, userUpdated } = usersSlice.actions

export default usersSlice.reducer