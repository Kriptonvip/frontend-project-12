import axios from 'axios';
import { Modal } from 'bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '../context/socket';
import { addNewChannel, setChannels } from '../slices/channelsSlice';
import { addMessage, setMessages } from '../slices/messagesSlice';
import store from '../slices/store';
import Channels from './Channels';
import ChannelsHeader from './ChannelsHeader';
import Messages from './Messages';
import ModalWindow from './modals/ModalWindow';

const Main = () => {
  // const [isConnected, setIsConnected] = useState(socket.connected);
  const dispatch = useDispatch();
  const onNewMessage = (message) => {
    console.log('newMessage send');
    dispatch(addMessage(message));
  };
  const onNewnewChannel = (message) => {
    console.log('newMessage send');
    dispatch(addNewChannel(message));
  };
  const { currentChannelId } = useSelector((store) => store.channelsReducer);
  useEffect(() => {
    const { token } = JSON.parse(localStorage.user);
    const fetchData = async () => {
      const { data } = await axios.get('/api/v1/data', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data);
      console.log('useEffect fires');
      store.dispatch(setMessages(data.messages));
      store.dispatch(setChannels(data.channels));
      socket.on('newMessage', onNewMessage);
      socket.on('newChannel', onNewnewChannel)
    };
    fetchData();
    return () => socket.off('newMessage', onNewMessage);
  }, []);

  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
          <ChannelsHeader />
          <Channels currentChannelId={currentChannelId} />
        </div>
        <div className="col p-0 h-100">
          <Messages currentChannelId={currentChannelId} />
        </div>
      </div>
      <ModalWindow/>
    </div>
  );
};

export default Main;
