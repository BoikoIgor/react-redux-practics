import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './tasksSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';
// axios.defaults.baseURL = 'https://6473c4aad784bccb4a3ce661.mockapi.io';

// export const fetchTasks = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get('/tasks');
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };
export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { text });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  'tasks/toggleCompleted',
  async (task, thunkAPI) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);