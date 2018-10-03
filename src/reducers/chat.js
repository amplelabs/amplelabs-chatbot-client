import { types } from '../actions';

const initialState = { messages: [] };

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEW_MESSAGE:
      return { ...state, messages: state.messages.concat(action.payload) };
    default:
      return state;
  }
}
