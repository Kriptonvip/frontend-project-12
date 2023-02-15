import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'channels/fetchUsers',
  async (data) => {}
);
const initialState = {
  channels: [],
  currentChannelId: 1,
  isLoading: true,
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setChannels(state, { payload }) {
      state.channels = payload;
    },
    addNewChannel(state, { payload }) {
      state.channels.push(payload);
    },
    setCurrentChannelId(state, { payload }) {
      state.currentChannelId = payload;
    },
  },
});

export const { setChannels, setCurrentChannelId, addNewChannel } =
  channelsSlice.actions;
export default channelsSlice.reducer;
