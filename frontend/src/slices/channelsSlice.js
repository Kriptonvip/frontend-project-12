import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'channels/fetchUsers',
  async (data) => {}
);
const initialState = {
  channels: [],
  currentChannelId: 1,
  defaultChannelId: 1,
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
      state.currentChannelId = payload.id;
    },
    removeChannel(state, { payload }) {
      state.channels = state.channels.filter((ch) => ch.id !== payload);
      state.currentChannelId = state.defaultChannelId;
    },
    renameChannel(state, { payload }) {
      const { id, name } = payload;
      const channelIndex = state.channels.map(ch => ch.id).indexOf(id);
      state.channels[channelIndex].name = name;
    },
    setCurrentChannelId(state, { payload }) {
      state.currentChannelId = payload;
    },
  },
});

export const {
  setChannels,
  setCurrentChannelId,
  addNewChannel,
  removeChannel,
  renameChannel,
} = channelsSlice.actions;
export default channelsSlice.reducer;
