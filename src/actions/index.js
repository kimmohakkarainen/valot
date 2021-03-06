import * as api from "../api";

export function fetchState() {
  return (dispatch) => {
    api
      .fetchState()
      .then((resp) => {
        dispatch(fetchStateSucceeded(resp.data));
      })
      .catch((error) => {
        dispatch(fetchError("Yhteysongelma"));
      });
  };
}

export function postState(params) {
  return (dispatch) => {
    api
      .postState(params)
      .then((resp) => {
        dispatch(fetchStateSucceeded(resp.data));
      })
      .catch((error) => {
        dispatch(fetchError("Yhteysongelma"));
      });
  };
}

export function fetchStateSucceeded(data) {
  return {
    type: "FETCH_STATE_SUCCEEDED",
    payload: {
      state: data
    }
  };
}

export function fetchError(error) {
  return {
    type: "OPEN_ERROR_MODAL",
    payload: {
      error: error
    }
  };
}
