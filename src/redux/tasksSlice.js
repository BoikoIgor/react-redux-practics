import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, fetchTasks, toggleCompleted } from './operations';
// import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// const tasksInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: {
    // [fetchTasks.pending](state, action) {
    //   state.isLoading = true;
    // },
    [fetchTasks.pending]: handlePending,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // [fetchTasks.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    [fetchTasks.rejected]: handleRejected,
    [addTask.pending]: handlePending,
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addTask.rejected]: handleRejected,
    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteTask.rejected]: handleRejected,
    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [toggleCompleted.rejected]: handleRejected,
  },

  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // addTask: {
  //   reducer(state, action) {
  //     state.push(action.payload);
  //   },
  //   prepare(text) {
  //     return {
  //       payload: {
  //         text,
  //         id: nanoid(),
  //         completed: false,
  //       },
  //     };
  //   },
  // },
  // deleteTask(state, action) {
  //   const index = state.findIndex(task => task.id === action.payload);
  //   state.splice(index, 1);
  // },
  // toggleCompleted(state, action) {
  //   for (const task of state) {
  //     if (task.id === action.payload) {
  //       task.completed = !task.completed;
  //       break;
  //     }
  //   }
  // },
  // },
});

// Експортуємо генератори екшенів та редюсер
// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
