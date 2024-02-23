import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../utils/firebase.config.js";

const initialState = {
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ name, email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });

    console.log(data);
    return {
      email: data.user.email,
      name: data.user.displayName,
    };
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
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = "false";
        state.isError = "true";
        state.error = action.error.message;
        state.name = "";
        state.email = "";
      });
  },
});

export default userSlice.reducer;
