import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalType: null,
  id: null,
  name: null,
  isOpen: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, { payload }) {
      console.log(payload)
      state.modalType = payload.modalType;
      state.id = payload.id;
      state.name = payload.name
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
