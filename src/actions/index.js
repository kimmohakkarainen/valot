import * as api from "../api";

export function fetchState() {
  console.log("fetchState()");
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
  console.log("postState()");
  console.log(params);
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
  console.log("fetchStateSucceeded " + data);
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
