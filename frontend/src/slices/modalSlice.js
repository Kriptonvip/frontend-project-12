import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalType: null,
  extra: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, { payload } ) {
      state.modalType = payload.modalType;
    },
    closeModal(state) {
        state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
