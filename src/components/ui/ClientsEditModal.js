import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const ClientsEditModal = forwardRef(
  ({ show, handleClose, submitHandler }, ref) => {
    useImperativeHandle(ref, () => {
      return { editHandler: handler };
    });
    const [editForm, setEditForm] = useState({
      event: "",
      description: "",
      rating: "",
    });
    const handler = (e) => {
      setEditForm({
        event: e?.event,
        description: e?.description,
        rating: e?.rating,
        id: e.id,
      });
    };

    const handleChange = (e) => {
      setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Clients</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Edit Event</Form.Label>
              <Form.Control
                name="event"
                type="text"
                placeholder="event"
                value={editForm.event}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Edit Description</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows={3}
                maxLength={150}
                placeholder="description"
                value={editForm.description}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">Max 200 characters</Form.Text>
            </Form.Group>
            <Form.Label>Edit Rating</Form.Label>
            <Form.Select
              name="rating"
              aria-label="Default select example"
              value={editForm.rating}
              onChange={handleChange}
            >
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
          <Button variant="primary" onClick={() => submitHandler(editForm)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
);
export default ClientsEditModal;
