import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isOpenAddUserModal: false,
  },
  reducers: {
    openAddUserModal: (state) => {
      state.isOpenAddUserModal = true;
    },
    closeAddUserModal: (state) => {
      state.isOpenAddUserModal = false;
    },
  },
});

export const { openAddUserModal, closeAddUserModal } = uiSlice.actions;

export const selectUi = (state) => state.ui;

export default uiSlice.reducer;
