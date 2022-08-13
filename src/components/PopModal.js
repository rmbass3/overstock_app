import React, { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function PopModal(props) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      handleShow()
    }, 1000)
  }, [])

  const handleClose = () => {
    setShow(false)
    //setDisableShow(true)
  }
  const handleShow = () => setShow(true)



  return (
    <div>
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