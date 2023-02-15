import React from 'react';
import cn from 'classnames';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { openModal } from '../slices/modalSlice';

const Channel = ({ name, removable, id, currentChannelId, handleChoose }) => {
  const dispatch = useDispatch();
  const isCurrent = id === currentChannelId;
  const btnClass = cn('w-100', 'rounded-0', 'text-start', 'btn', {
    'btn-secondary': isCurrent,
  });
  if (removable) {
    return (
      <Dropdown as={ButtonGroup} className="d-flex">
        <Button
          variant={isCurrent ? 'secondary' : 'transparent'}
          onClick={handleChoose}
          className={btnClass}
          id={id}>
          <span className="me-1">#</span>
          {name}
        </Button>

        <Dropdown.Toggle
          split
          variant={isCurrent ? 'secondary' : 'transparent'}
        />

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() =>
              dispatch(openModal({ modalType: 'RemoveChannel', id }))
            }>
            Удалить
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              dispatch(openModal({ modalType: 'RenameChannel', id, name }))
            }>
            Переименовать
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  return (
    <>
      <Button
        variant={isCurrent ? 'secondary' : 'transparent'}
        onClick={handleChoose}
        id={id}
        className={btnClass}>
        <span className="me-1">#</span>
        {name}
      </Button>
    </>
  );
};

export default Channel;
