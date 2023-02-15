import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { SocketContext } from '../../context/socket';
import { closeModal } from '../../slices/modalSlice';

function RemoveChannel({ show, id }) {
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal());

  const handleRemove = (e) => {
    e.preventDefault();
    try {
      socket.emit('removeChannel', {
        id: id,
      });
    } catch (error) {
      console.log(error.message);
    }
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Удалить канал</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" name="RemoveChannel">
              <p className="lead">Уверены?</p>
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                className="me-2"
                onClick={handleClose}>
                Отменить
              </Button>
              <Button type="submit" variant="danger" onClick={handleRemove}>
                Удалить
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RemoveChannel;
