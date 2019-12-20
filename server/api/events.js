const router = require("express").Router();
const { Event, Venue } = require("../db/models");
const moment = require("moment");
moment().format();

// let myDate =  moment(data.myTime.format('YYYY/MM/DD HH:mm:ss')).format("YYYY-MM-DD HH:mm:ss");

//the route to create a new event in events table and add the date to the array of booked dates in venue table
router.post("/", async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    Venue.findByPk(req.body.venueId).then(venue => {
      // console.log("venue booked at 0:", venue.booked[0]);
      console.log("venue booked:", venue.booked)
      let myDate = moment(req.body.date).format("YYYY-MM-DD HH:mm:ss");
      let newString = myDate.toString();
      console.log("my date", myDate);
      console.log("new string", newString);
      venue.sequelize.query(
        `UPDATE Venues SET booked = '{${[
          ...venue.booked,
          [new Date(Date.UTC(2020, 5, 23)), new Date(Date.UTC(2020, 5, 25))]
        ]}}' WHERE id= ${venue.id}`
      );

      // venue.booked.push([{value: newString, inclusive: true},{value: newString, inclusive: false}])
      Venue.findByPk(req.body.venueId).then(ven => {
        // console.log("venue booked at 0:", venue.booked[0]);
        console.log("venue booked after query:", ven.booked)})

      // new Date(Date.UTC(2020, 5, 23)), new Date(Date.UTC(2020, 5, 25))
    });
    // venue.update({booked: venue.booked.push(range)})})

    res.json(newEvent);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
