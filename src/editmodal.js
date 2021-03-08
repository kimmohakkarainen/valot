import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function EditModal({ color, onSave, onClose }) {
  const [name, setName] = useState(color.name);
  const [info, setInfo] = useState(color.text);
  const [red, setRed] = useState(color.red);
  const [green, setGreen] = useState(color.green);
  const [blue, setBlue] = useState(color.blue);

  function handleSave() {
    onSave({
      id: color.id,
      name: name,
      text: info,
      bright: 255,
      red: red,
      green: green,
      blue: blue
    });
  }

  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group controlId="labelValue">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              type="text"
              onChange={(e) => {
                console.log(e.target);
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="infoValue">
            <Form.Label>textarea</Form.Label>
            <Form.Control
              value={info}
              type="textarea"
              onChange={(e) => {
                setInfo(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="redValue">
            <Form.Label>Red</Form.Label>
            <Form.Control
              value={red}
              min={0}
              max={255}
              type="range"
              onChange={(e) => {
                setRed(e.target.value);
              }}
              custom
            />
          </Form.Group>
          <Form.Group controlId="greeValue">
            <Form.Label>Green</Form.Label>
            <Form.Control
              value={green}
              min={0}
              max={255}
              type="range"
              onChange={(e) => {
                setGreen(e.target.value);
              }}
              custom
            />
          </Form.Group>
          <Form.Group controlId="blueValue">
            <Form.Label>Blue</Form.Label>
            <Form.Control
              value={blue}
              min={0}
              max={255}
              type="range"
              onChange={(e) => {
                console.log(e.target);
                setBlue(e.target.value);
              }}
              custom
            />
          </Form.Group>
        </Form>{" "}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </>
  );
}
