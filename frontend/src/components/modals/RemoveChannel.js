import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function RemoveChannel() {
  const [show, setShow] = useState('');
  const [value, setValue] = useState('');
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  const handleSubmit = (value) => (e) => {
    e.preventDefault();
    console.log(e, 'element')
    console.log(value)
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

export default RemoveChannel;
