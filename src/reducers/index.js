import { uniqueId } from "../actions";

export default function poriState(
  state = {
    state: []
  },
  action
) {
  console.log(action);
  const newstate = Object.assign({}, state, action.payload);
  return newstate;
}
