import { BOOK_DATE, BOOKED_DATE } from "./constants";

const initialState = {
  date: new Date()
};
//action creators
const bookedDate = date => ({ type: BOOKED_DATE, date });

export const bookDate = date =>async dispatch => {
  try {
    //date, venueid, name and type should be on the body of request to create event
    const res = await axios.post("/api/events", {
      date: date,
      venueid: 1
    });
  } catch (err) {
    console.error(err);
  }
};
}
