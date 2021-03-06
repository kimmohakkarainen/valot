import axios from "axios";

/* const API_BASE_URL = ""; */
const API_BASE_URL = "http://localhost:8080";
/* const API_BASE_URL = "http://192.168.255.32:8080"; */

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export function fetchState() {
  return client.get("/rest/state");
}

export function postState(params) {
  return client.post("/rest/state", params);
}
