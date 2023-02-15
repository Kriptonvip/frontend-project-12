import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '../context/socket';
import { addNewChannel, removeChannel, renameChannel, setChannels } from '../slices/channelsSlice';
import { addMessage, setMessages } from '../slices/messagesSlice';
import store from '../slices/store';
import Channels from './Channels';
import ChannelsHeader from './ChannelsHeader';
import Messages from './Messages';
import ModalWindow from './modals/index';

const Main = () => {
  // const [isConnected, setIsConnected] = useState(socket.connected);
  const dispatch = useDispatch();
  const onNewMessage = (message) => {
    dispatch(addMessage(message));
  };
  const onNewChannel = (message) => {
    dispatch(addNewChannel(message));
  };
  const onRemoveChannel = ({id}) => {
    dispatch(removeChannel(id));
  };
  const onRenameChannel = (payload) => {
    dispatch(renameChannel(payload));
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
      socket.on('newChannel', onNewChannel)
      socket.on('removeChannel', onRemoveChannel)
      socket.on('renameChannel', onRenameChannel)
    };
    fetchData();
    return () => {
      socket.off('newMessage', onNewMessage);
      socket.off('newChannel', onNewChannel);
      socket.off('removeChannel', onRemoveChannel);
      socket.off('renameChannel', onRenameChannel);
    }
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
