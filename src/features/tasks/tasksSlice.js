import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    hideDoneTasks: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: state => {
      state.hideDoneTasks = !state.hideDoneTasks;
    },
    toggleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload);
      tasks[index].done = !tasks[index].done;
    },
    markAllDone: ({ tasks }) => {
      tasks.forEach(task => {
        task.done = true;
      });
    },
    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload)
      tasks.splice(index, 1);
    },
    downloadExampleTasksError: state => {
      state.loading = false;
    },
    downloadExampleTasksPending: (state, { payload: exampleTasks }) => {
      state.tasks = exampleTasks;
      state.loading = false;
    },
    downloadExampleTasks: state => {
      state.loading = true;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  markAllDone,
  removeTask,
  downloadExampleTasks,
  downloadExampleTasksError,
  downloadExampleTasksPending
} = tasksSlice.actions;

export const selectTasks = state => state.tasks;
export const selectLoad = state => selectTasks(state).loading;
export default tasksSlice.reducer;