import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../utils/firebase.config";

const initialState = {
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ email, password }) => {
    const data = createUserWithEmailAndPassword(auth, email, password);

    console.log(data);
    return;
  }
);
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = "true";
        state.isError = "false";
        state.error = "";
        state.name = "";
        state.email = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = "false";
        state.isError = "false";
        state.error = "";
        state.name = payload.name;
        state.email = payload.email;
      })
      .addCase(createUser.rejected, (state) => {});
  },
});

export default userSlice.reducer;
