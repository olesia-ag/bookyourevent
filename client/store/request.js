import { CREATED_REQUEST, ADDED_REQUEST, BAD_REQUEST } from "./constants";
import axios from "axios";

const initialState = {
  firstName: null,
  lastName: null,
  budget: -1,
  numOfPeople: null,
  comment: "",
  submitted: false,
  errors: []
};
//action creators
const createdRequest = () => ({ type: CREATED_REQUEST });
const madeBadRequest = _err => ({ type: BAD_REQUEST, _err });
const addedRequest = (name, value) => ({ type: ADDED_REQUEST, name, value });

export const createRequest = request => async dispatch => {
  try {
    const res = await axios.post("/api/requests", request);
    if (res.data.value === "success") {
      dispatch(createdRequest());
    } else {
      dispatch(madeBadRequest(res.data.errors));
    }
  } catch (err) {
    console.error(err);
  }
};

export const addRequest = (name, value) => dispatch => {
  dispatch(addedRequest(name, value));
};

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case CREATED_REQUEST:
      return { ...state, submitted: true };
    case BAD_REQUEST:
      return { ...state, errors: [...action._err] };
    case ADDED_REQUEST:
      return {
        ...state,
        [action.name]: action.value
      };
    default:
      return state;
  }
}
