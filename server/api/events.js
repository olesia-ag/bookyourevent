const router = require("express").Router();
const { Event, Venue } = require("../db/models");
const moment = require("moment");
moment().format();

//the route to create a new event in events table and add the date to the array of booked dates in venue table
//need to modify the route so that date will be put in order
router.post("/", async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    let myDate = moment(req.body.date).format("YYYY-MM-DD");
    Venue.findByPk(req.body.venueid).then(venue => {
      console.log("venue id:", req.body.venueid);
      // let newString = myDate.toString();
      venue.sequelize.query(
        `UPDATE Venues SET booked = '{${[
          ...venue.booked,
          myDate
        ]}}' WHERE id= ${venue.id}`
      );
      // Venue.findByPk(req.body.venueid).then(ven => {
      //   console.log("venue booked after query:", ven.booked)})
    });
    res.json(newEvent);
  } catch (error) {
    res.send(error);
  }
});


module.exports = router;
