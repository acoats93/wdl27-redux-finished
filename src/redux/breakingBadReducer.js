import axios from "axios";

const initialState = {
  characters: [],
  loading: false
};

const UPDATE_CHARACTERS = "UPDATE_CHARACTERS";

export function updateCharacters() {
  return {
    type: UPDATE_CHARACTERS,
    payload: axios.get("https://www.breakingbadapi.com/api/characters")
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${UPDATE_CHARACTERS}_FULFILLED`:
      return {
        ...state,
        characters: action.payload.data,
        loading: false
      };
    case `${UPDATE_CHARACTERS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
