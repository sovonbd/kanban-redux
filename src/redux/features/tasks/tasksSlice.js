import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  userSepcificTaks: [],
};
const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id);
      if (target.status === "pending") {
        target.status = "running";
      } else if (target.status === "running") {
        target.status = "done";
      } else {
        target.status = "archive";
      }
    },
    userTasks: (state, { payload }) => {
      state.userSepcificTaks = state.tasks.filter(
        (item) => item.assignedTo === payload
      );
    },
  },
});

export const { addTask, removeTask, updateStatus, userTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
