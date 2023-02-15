import React from 'react';
import cn from 'classnames';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const Channel = ({ name, removable, id, currentChannelId, handleChoose }) => {
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
          <Dropdown.Item href="#/action-1">Удалить</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Переименовать</Dropdown.Item>
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
