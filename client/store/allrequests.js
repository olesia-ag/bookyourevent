import { GOT_ALL_REQUESTS } from "./constants";
import axios from "axios";

const initialState = { requests: [] };

const gotAllRequests = arr => ({ type: GOT_ALL_REQUESTS, arr });

export const arrangeRequests = arr => dispatch => {
  console.log("WENT TO ARRANGE REQUESTS", arr);

  dispatch(gotAllRequests(arr));
};

export const getAllRequests = (sortBy, direction) => async dispatch => {
  console.log("went to requests");
  try {
    const res = await axios.get(
      `/api/requests?sortBy=${sortBy}&direction=${direction}`
    );

    dispatch(gotAllRequests(res.data));
  } catch (err) {
    console.log(err);
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_REQUESTS:
      console.log("GOT ALL REQUESTS:", action.arr);
      return {
        ...state,
        requests: action.arr
      };
    default:
      return state;
  }
}
