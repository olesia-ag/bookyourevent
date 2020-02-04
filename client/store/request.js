import { CREATED_REQUEST, ADDED_REQUEST } from "./constants";
import axios from "axios";

const initialState = {
  firstName: "",
  lastName: "",
  budget: -1,
  numOfPeople: 0,
  comment: "",
  submitted: false
};
//action creators
const createdRequest = () => ({ type: CREATED_REQUEST });

const addedRequest = (name, value) => ({ type: ADDED_REQUEST, name, value });

export const createRequest = request => async dispatch => {
  try {
    const res = await axios.post("/api/requests", request);
    if (res.data.value === "success") {
      dispatch(createdRequest());
    } else if (res.data.name === "SequelizeUniqueConstraintError") {
      return "Already submitted with your email";
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
    case ADDED_REQUEST:
      return {
        ...state,
        [action.name]: action.value
      };
    default:
      return state;
  }
}
