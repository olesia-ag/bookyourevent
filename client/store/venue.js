import axios from "axios";
import { GOT_VENUE } from "./constants";

const initialState = {
  venue: -1
};
//action creator:
const gotVenue = venue => ({
  type: GOT_VENUE,
  venue: venue
});

export const getVenue = venueId => async dispatch => {
  try {
    const res = await axios.get(`/api/venues/${venueId}`);
    dispatch(gotVenue(res.data));
  } catch (err) {
    console.log(err);
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_VENUE:
      return { ...state, venue: action.venue };
    default:
      return state;
  }
}
