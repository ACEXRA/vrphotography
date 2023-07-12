import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ClientsEditModal = ({ show, setShow, handleClose, handleShow }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Clients</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Edit Event</Form.Label>
            <Form.Control type="text" placeholder="event" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Edit Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              maxLength={150}
              placeholder="description"
            />
            <Form.Text className="text-muted">Max 200 characters</Form.Text>
          </Form.Group>
          <Form.Label>Edit Rating</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ClientsEditModal;
