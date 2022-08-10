import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function PopModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Stay Informed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Be the first to know about special deals and offers!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PopModal