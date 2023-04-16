import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function StopModal({func}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleConfirm = () => {
    func();
    handleClose();
  };

  return (
    <>
      <Button className="float-right" size="sm" variant="danger" onClick={handleShow}>
        Stop checking
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This will stop the search and reset the argument. Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StopModal;