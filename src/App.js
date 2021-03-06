import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { Container, Row, Col, Button, CardDeck, Card } from "react-bootstrap";

import { fetchState, postState } from "./actions";

import Menu from "./menu";

function App({ fetchState, postState, state }) {
  useEffect(() => {
    fetchState();
  }, [fetchState]);

  function handleClick(button) {
    console.log("handleClick");
    console.log(button);
    postState(button);
  }

  const buttons = state.state;

  return (
    <div className="App">
      <Menu />
      {buttons.map((button) => {
        const bg = button.active ? "danger" : "ligt";
        const text = button.active ? "white" : "dark";

        return (
          <Card
            bg={bg}
            text={text}
            style={{ margin: "1rem" }}
            variant={button.variant}
            className="text-center"
            key={button.id}
          >
            <Card.Header>{button.name}</Card.Header>
            <Card.Body>
              <Card.Text>{button.text}</Card.Text>
              <Button variant="primary" onClick={() => handleClick(button)}>
                SELECT
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">{button.footer}</Card.Footer>
          </Card>
        );
      })}
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
    postState: (params) => dispatch(postState(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
