import React, { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

function PopModal(props) {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      handleShow()
    }, 1000)
  }, [])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        centered
      >
        <Modal.Header className="modal-top-header" closeButton>
          <Modal.Title className="modal-top-title">Stay Informed!</Modal.Title>
        </Modal.Header>
        <Modal.Header className="modal-bottom-header">
          <div className="modal-bottom-title">Be the first to know about our specials and new arrivals!</div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Full name" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="phone" placeholder="Phone number" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" className="modal-submit">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PopModal