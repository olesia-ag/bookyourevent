const router = require("express").Router();
const { Venue } = require("../db/models");
const moment = require("moment");
moment().format();

// router.post('/isavailable', (req, res) => {
//   Venue.findByPk(req.body.venueid).then(venue => {
//     venue.booked.forEach(element => {
//       let dateToFind = new Date(req.body.date)

//       //code for checking range:
//       if (dateToFind.getTime() === element[0].value.getTime()) {
//         res.json({value: false})
//       } else if (dateToFind.getTime() === element[1].value.getTime()) {
//         res.send(false)
//       } else if (
//         dateToFind.getTime() > element[0].value.getTime() &&
//         dateToFind.getTime() < element[1].value.getTime()
//       ) {
//         res.send(false)
//       } else {
//         res.send(true)
//       }
//     })
//   })
// })

router.post("/isavailable", (req, res) => {
  let dateToFind = moment(req.body.date).format("YYYY-MM-DD");
  Venue.findByPk(req.body.venueid).then(venue => {
    venue.booked.forEach(element => {
      element = moment(element).format("YYYY-MM-DD");
      //if finds a match, send 'notAvailable: true' on response.data, if match is not found, notAvailable will not exist
      if (dateToFind === element) {
        res.json({ notAvailable: true });
      }
    });
    res.status(200).json({ request: "ok" });
  });
});

router.get("/:venueId", (req, res) => {
  Venue.findByPk(req.params.venueId).then(venue => {
    res.json(venue);
  });
});

//get an array of all booked dates for specified event
router.get("/datesbooked/:venueId", (req, res) => {
    Venue.findByPk(req.params.venueId).then(venue => {
      //return sorted array, in the future: booking should be made in order as well
      res.send(venue.booked.sort())
    });

});

router.get("/", async (req, res, next) => {
  try {
    const venues = await Venue.findAll();
    res.json(venues);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
