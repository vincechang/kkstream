import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../api/index';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: [],
    filter: '',
    sortBy: 'id-asc',
    isLoading: false,
    error: false,
  },
  reducers: {
    addUser: (
      { value },
      {
        payload: { username, email } = {
          username: 'Unknown',
          email: 'Unknown',
        },
      }
    ) => {
      const maxId = Math.max(...value.map((user) => user.id));
      value.push({
        id: maxId + 1,
        username,
        email,
      });
    },
    removeById: (state, action) => {
      const newValue = state.value.filter(
        (item) => item.id !== action.payload.id
      );
      state.value = newValue;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    sortBy: (state, { payload }) => {
      state.sortBy = payload;
    },
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
  addUser,
  removeById,
  setFilter,
  sortBy,
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

export const selectFilter = (state) => state.users.filter;
export const selectSorting = (state) => state.users.sortBy;
export const selectUsers = (state) => state.users.value;

export default usersSlice.reducer;
