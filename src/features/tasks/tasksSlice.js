import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDoneTasks: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: state => {
      state.hideDoneTasks = !state.hideDoneTasks;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    markAllDone: ({ tasks }) => {
      tasks.forEach(task => {
        task.done = true;
      });
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId)
      tasks.splice(index, 1);
    },
    downloadTasksError: state => {
      state.loading = false;
    },
    downloadTasksPending: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = false;
    },
    downloadTasks: state => {
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
  downloadTasks,
  downloadTasksError,
  downloadTasksPending
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDoneTasks;
export const selectLoad = state => selectTasksState(state).loading;
export const selectAreTasksEmpty = state => selectTasks(state).lenght === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectIsAnyTaskDone = state => selectTasks(state).every(({ done }) => !done);
export default tasksSlice.reducer;