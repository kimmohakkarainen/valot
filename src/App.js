import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { Container, Row, Col, Button } from "react-bootstrap";

import { fetchState, postState } from "./actions";

import Menu from "./menu";

function App({ fetchState, postState, state }) {
  useEffect(() => {
    fetchState();
  }, [fetchState]);

  console.log(state);

  const buttons = state.state;

  return (
    <div className="App">
      <Menu />
      <Container>
        <Row>
          {buttons.map((button) => {
            return (
              <Col xs={12} md={6}>
                <Button>{button.name}</Button>
              </Col>
            );
          })}
        </Row>
      </Container>
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
