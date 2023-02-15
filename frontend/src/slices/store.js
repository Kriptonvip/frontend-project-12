import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './channelsSlice.js';
import messagesReducer from './messagesSlice.js';
import modalReducer from './modalSlice';

export default configureStore({
  reducer: {
    modalReducer,
    channelsReducer,
    messagesReducer,
  },
});
