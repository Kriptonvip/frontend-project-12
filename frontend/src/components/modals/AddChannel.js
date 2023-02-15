import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { SocketContext } from '../../context/socket';
import { closeModal } from '../../slices/modalSlice';

function AddChannel() {
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modalReducer.modalType);
  const show = !!modalType;
  const [value, setValue] = useState('');
  // const handleShow = () => setShow(true);
  const handleClose = () => dispatch(closeModal());

  const handleSubmit = (value) => (e) => {
    e.preventDefault();
    if (value) {
      try {
        socket.emit('newChannel', {
          name: value,
          removable: true,
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
          <Modal.Title>Добавить канал</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(value)}>
            <Form.Group className="mb-3" name="ChannelName">
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
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

export default AddChannel;
