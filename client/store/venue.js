import axios from "axios";
import { GOT_VENUE, GET_ALL_VENUES, GOT_ALL_VENUES } from "./constants";

const initialState = {
  venue: -1,
  venues: []
};
//action creator:
const gotVenue = venue => ({
  type: GOT_VENUE,
  venue: venue
});

const gotAllVenues = venues => ({
  type: GOT_ALL_VENUES,
  venues: venues
});

export const getVenue = venueId => async dispatch => {
  try {
    const res = await axios.get(`/api/venues/${venueId}`);
    dispatch(gotVenue(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const getAllVenues = () => async dispatch => {
  console.log("got to thunk")
  try {
    const res = await axios.get("/api/venues");
    dispatch(gotAllVenues(res.data));
  } catch (err) {
    console.log(err);
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_VENUE:
      return { ...state, venue: action.venue };
    case GOT_ALL_VENUES:
      return {...state, venues: action.venues};
    default:
      return state;
  }
}
