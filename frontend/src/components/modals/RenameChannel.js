import React, { useContext, useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { SocketContext } from '../../context/socket';
import { closeModal } from '../../slices/modalSlice';

function RenameChannel({ show, id, name }) {
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  const [value, setValue] = useState(name);
  const handleClose = () => dispatch(closeModal());
  const innerRef = useRef();
  useEffect(() => innerRef.current && innerRef.current.focus());
  const handleSubmit = (value) => (e) => {
    e.preventDefault();
    if (value) {
      try {
        socket.emit('renameChannel', {
          name: value,
          id: id,
        });
      } catch (error) {
        console.log(error.message);
      }
    }
    handleClose();
  };

  const onInput = ({ target: { value } }) => setValue(value);
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Переименовать канал</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(value)}>
            <Form.Group className="mb-3" name="ChannelName">
              <Form.Control
                ref={innerRef}
                type="text"
                placeholder=""
                onChange={onInput}
                value={value}
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                className="me-2"
                onClick={handleClose}>
                Отменить
              </Button>
              <Button type="submit" variant="primary">
                Отправить
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RenameChannel;
