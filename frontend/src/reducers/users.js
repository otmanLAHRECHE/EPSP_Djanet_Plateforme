import { GET_USER, DELETE_USER, ADD_NEW_USER} from '../actions/types.js';

const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((lead) => lead.id !== action.payload),
      };
    case ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
}