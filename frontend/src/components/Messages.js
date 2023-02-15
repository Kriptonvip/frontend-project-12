import { useSelector } from 'react-redux';
import Message from './Message';
import MessagesForm from './MessagesForm';

const Messages = ({currentChannelId}) => {
  const { messages } = useSelector(
    (store) => store.messagesReducer
  );
  return (
    <div className="d-flex flex-column h-100">
      <div className="bg-light mb-4 p-3 shadow-sm small">
        <p className="m-0">
          <b># general</b>
        </p>
        <span className="text-muted">1 сообщений</span>
      </div>
      <div id="messages-box" className="chat-messages overflow-auto px-5 ">
      {messages.filter((item) => (item.channelId === currentChannelId)).map((message) => <Message key={message.id} {...message} />)}
      </div>
      <MessagesForm currentChannelId = {currentChannelId}/>
    </div>
  );
};

export default Messages;
