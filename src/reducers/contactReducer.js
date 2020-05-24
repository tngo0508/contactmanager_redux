import {
  GET_CONTACTS,
  DELETE_CONTACTS,
  ADD_CONTACTS,
  GET_CONTACT,
  UPDATE_CONTACTS,
} from "../actions/types";
import { bindActionCreators } from "redux";

const initialState = {
  contacts: [],
  contact: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case DELETE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case ADD_CONTACTS:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
}
