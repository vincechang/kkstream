import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../api/index';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    add: (state) => {},
    remove: (state) => {},
    fetch: (state) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  add,
  remove,
  fetch,
  fetchSuccess,
  hasError,
} = usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetch());
  try {
    await api
      .get('/users')
      .then((response) => dispatch(fetchSuccess(response.data)));
  } catch (e) {
    dispatch(hasError(e.message));
  }
};

export const selectUsers = (state) => state.users.value;

export default usersSlice.reducer;
