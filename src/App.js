import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { Modal } from "react-bootstrap";

import { fetchState, postState } from "./actions";

import Menu from "./menu";

function App({ fetchState, postState, state }) {
  useEffect(() => {
    fetchState();
  }, [fetchState]);

  return (
    <div className="App">
      <Menu />
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
