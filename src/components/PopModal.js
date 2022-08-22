import React, { useState, useEffect, useRef } from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { db } from '../firebase/firebaseConfig'
import { doc, setDoc } from "firebase/firestore"

function PopModal(props) {

  const [show, setShow] = useState(false)
  const [validated, setValidated] = useState(false)
  const nameInput = useRef(null)
  const emailInput = useRef(null)
  const phoneInput = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      handleShow()
    }, 1000)
  }, [])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false){
      event.stopPropagation()
      return
    }
    setValidated(true)
    const name = nameInput?.current?.value
    const email = emailInput?.current?.value
    const phone = phoneInput?.current?.value
    handleClose()

    try {
      await setDoc(doc(db, "emails", email), {
        name: name,
        email: email,
        phone: phone,
        time: new Date()
      })
    } catch (e) {
      console.error(e)
    }
  }

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
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Full name"
                ref={nameInput}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                required
                type="email" 
                placeholder="Email" 
                ref={emailInput}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control 
                type="tel" 
                placeholder="Phone number" 
                ref={phoneInput}
                pattern="^[0-9\-\+]{9,15}$"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
            <Button variant="light" type="submit" className="modal-submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default PopModal