import axios from "axios";
import history from "../history";
import {
  CHECK_DATE,
  GET_DATE,
  GOT_DATE,
  DATE_IS_AVAILABLE,
  DATE_IS_NOT_AVAILABLE
} from "./constants";

const initialState = {
  isAvailable: -1,
  currentMonth: new Date(),
  selectedDate: new Date(),
  checkedDate: new Date()
};
//action types

//action creators

const dateIsAvailable = date => ({ type: DATE_IS_AVAILABLE, value: true });
const dateIsNotAvailable = date => ({
  type: DATE_IS_NOT_AVAILABLE,
  value: false
});
const gotDate = date => ({ type: GET_DATE, date });

//thunk creators

export const checkDate = date => async dispatch => {
  try {
    const res = await axios.post("/api/venues/isavailable", {
      date: date,
      venueid: 1
    });

    if (res.data.notAvailable) {
      dispatch(dateIsNotAvailable());
    } else {
      dispatch(dateIsAvailable());
    }
  } catch (err) {
    console.error(err);
  }
};

export const getSelectedDate = date => dispatch => {
  dispatch(gotDate(date));
};

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case DATE_IS_AVAILABLE:
      return {
        ...state,
        isAvailable: action.value,
        checkedDate: state.selectedDate
      };

    case DATE_IS_NOT_AVAILABLE:
      return {
        ...state,
        isAvailable: action.value,
        checkedDate: state.selectedDate
      };
    case GET_DATE:
      return {
        ...state,
        selectedDate: action.date,
        currentMonth: action.date
      };
    default:
      return state;
  }
}
