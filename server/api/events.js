const router = require("express").Router();
const { Event, Venue } = require("../db/models");
const moment = require("moment");
moment().format();

// let myDate =  moment(data.myTime.format('YYYY/MM/DD HH:mm:ss')).format("YYYY-MM-DD HH:mm:ss");

router.post("/", async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    Venue.findByPk(req.body.venueId).then(venue => {
      console.log("venue booked at 0:", venue.booked[0]);
      let myDate = moment(req.body.date).format("YYYY-MM-DD HH:mm:ss");
      let newString = myDate.toString();
      console.log(myDate);
      console.log(newString);
      venue.sequelize.query(
        `UPDATE Venues SET booked = '{${[
          ...venue.booked,
          myDate
        ]}}' WHERE id= ${venue.id}`
      );
    });
    // venue.update({booked: venue.booked.push(range)})})

    res.json(newEvent);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
