import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Sovon",
  email: "sovon@gmail.com",
  userTasks: [],
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
