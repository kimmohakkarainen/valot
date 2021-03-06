export default function valoState(
  state = {
    state: []
  },
  action
) {
  console.log(action);
  const newstate = Object.assign({}, state, action.payload);
  return newstate;
}
