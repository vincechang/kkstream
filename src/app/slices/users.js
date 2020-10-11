import { createSlice } from '@reduxjs/toolkit';
import { api } from '../../api/index';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state) => {},
    remove: (state) => {},
    fetchSuccess: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    },
  },
});

export const { add, remove, fetchSuccess } = usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  try {
    await api
      .get('/users')
      .then((response) => dispatch(fetchSuccess(response.data)));
  } catch (e) {
    return console.error(e.message);
  }
};

export const selectUsers = (state) => state.users.value;

export default usersSlice.reducer;
