import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentChannelId, removeChannel } from '../slices/channelsSlice';
import Channel from './Channel';

const Channels = ({ currentChannelId }) => {
  const dispatch = useDispatch();
  console.log('channels rendered')
  const { channels } = useSelector((store) => store.channelsReducer);
  const handleChoose = ({ target }) => {
    const { id } = target;
    dispatch(setCurrentChannelId(Number(id)));
  };
  const handleRemove = ({ target }) => {
    const { id } = target;

    dispatch(removeChannel(Number(id)));
  };
  const handleRename = (e) => {};
  return (
    <>
      <ul className="nav flex-column nav-pills nav-fill px-2">
        {channels.map((channel) => (
          <li className="nav-item w-100" key={channel.id}>
            <Channel
              {...channel}
              handleChoose={handleChoose}
              handleRemove={handleRemove}
              currentChannelId={currentChannelId}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Channels;
