import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  Container,
  Row,
  Col,
  Button,
  CardDeck,
  Card,
  Modal
} from "react-bootstrap";

import { fetchState, postState, postColor } from "./actions";
import EditModal from "./editmodal";

import Menu from "./menu";

function App({ fetchState, postState, postColor, state }) {
  const [modifyColor, setModifyColor] = useState(null);
  const [deleteColor, setDeleteColor] = useState(null);
  const [createColor, setCreateColor] = useState(false);

  useEffect(() => {
    fetchState();
  }, [fetchState]);

  useEffect(() => {
    setModifyColor(null);
    setDeleteColor(null);
    setCreateColor(false);
  }, [state]);

  function handleClick(button) {
    console.log(button.active);
    if (button.active) {
      setModifyColor(button);
    } else {
      postState(button);
    }
  }

  function handleSave(color) {
    console.log("handledSave()");
    console.log(color);
    postColor(color);
  }

  const colors = state.state;

  return (
    <div className="App">
      <Menu />

      {modifyColor != null && (
        <Modal show={true} onHide={() => {}}>
          <Modal.Header>Edit Vacation</Modal.Header>
          <EditModal
            color={modifyColor}
            onSave={handleSave}
            onClose={() => {
              setModifyColor();
            }}
          />
        </Modal>
      )}

      {createColor && (
        <Modal show={true} onHide={() => {}}>
          <Modal.Header>Add New Vacation</Modal.Header>
          <EditModal
            color={{ name: "uusi", text: "", red: 0, green: 0, blue: 0 }}
            onSave={handleSave}
            onClose={() => {
              setCreateColor(false);
            }}
          />
        </Modal>
      )}

      {colors.map((color) => {
        const bg = color.active ? "danger" : "ligt";
        const text = color.active ? "white" : "dark";

        return (
          <Card
            bg={bg}
            text={text}
            style={{ margin: "1rem" }}
            variant={color.variant}
            className="text-center"
            key={color.id}
            onClick={() => handleClick(color)}
          >
            <Card.Header>
              <h1>{color.name}</h1>
            </Card.Header>
            <Card.Body>
              <Card.Text>{color.text}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
      <Card body>
        <Button onClick={() => setCreateColor(true)}>Add</Button>
      </Card>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchState: () => dispatch(fetchState()),
    postState: (params) => dispatch(postState(params)),
    postColor: (params) => dispatch(postColor(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
